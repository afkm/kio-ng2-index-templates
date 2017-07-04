import * as path from 'path'
import * as fs from './fs'
import { ngCli, packageJson } from './config'
import { TemplateOptions } from './interfaces'

export const SELF_ROOT = path.resolve(__dirname,'..')
export const parentModuleRoot = path.resolve('./')


export function i18nFile ( lang:string, assetsPath:string ) {
  return fs.readdir(assetsPath).filter ( item => `${lang}.json` === item.toLowerCase() )
    .map ( item => path.join(assetsPath,item) ).shift()
}

export function templateHtml ( rootPath:string, basename:string='index.html' ) {
  return [ `./${basename}`, `./src/${basename}` ]
    .map ( filename => path.join(rootPath,filename) )
    .filter ( fs.fileExists )
}

export function defaultConfig ( rootPath:string=process.cwd() ) {

  return  <K extends keyof TemplateOptions> ( key:K ):TemplateOptions[K] => {

    switch (key) {
      case "templateHtml":
        return path.join(rootPath,'./dist/index.html')

      case "i18n":
        const assetsPath = path.join(rootPath,'./src/assets/i18n')
        const files = fs.readdir(assetsPath,/\.json$/i)
        return (files||[]).map ( f => path.join(assetsPath,f) )

      case "output":
        return path.join(rootPath,'./dist')

    }

  }

}

/**
 * @brief      create a resolver for option keys based on $rootPath
 *
 * @param      rootPath  The root path
 *
 * @return     option resolver
 */
export function options ( rootPath:string=process.cwd() ) {

  const ngCliConfig = ngCli.resolve(rootPath)
  const packageConfig = packageJson.resolve(rootPath)
  const defaults = defaultConfig(rootPath)
  const localPath = ( pathname:string|string[] ) => {
    if ( Array.isArray(pathname) )
      return pathname.map ( localPath )
    return pathname.replace(rootPath,'.')
  }
  return  <K extends keyof TemplateOptions> ( key:K ):TemplateOptions[K] => {
    return localPath((packageConfig && packageConfig(key)) || (ngCliConfig && ngCliConfig(key)) || defaults(key))
  }
  
}