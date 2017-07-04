import { TemplateOptions } from '../interfaces'
import * as fs from '../fs'
import * as path from 'path'

export function ngCliJson ( rootPath:string ):any|void {
  const ngCliJsonPath = path.join(rootPath,'.angular-cli.json')
  if ( fs.fileExists(ngCliJsonPath) )
    return require(ngCliJsonPath)
}

export function resolve ( rootPath:string ) {

  const ngCli = ngCliJson(rootPath)

  if ( !ngCli || !ngCli.app )
    return undefined

  const app:any = ngCli.app
  const appRoot = path.join(rootPath,app.root)

  return function ( key:keyof TemplateOptions ) {

    switch ( key )
    {
      case 'templateHtml':
        return path.join(appRoot,app.index)

      case 'output':
        return app.outDir ? path.join(rootPath,app.outDir) : undefined
      
      case 'i18n':
        if ( !('assets' in app ) )
        {
          return undefined
        }
        return app.assets
                .map ( f => path.join(appRoot,f) )
                .find ( f => (fs.readdir(f,/\.json$/i)||[]).length > 0 )
    }

  }
}