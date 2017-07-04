import { TemplateOptions } from '../interfaces'
import * as fs from '../fs'
import * as path from 'path'


export function read ( rootPath:string ):any|void {
  const packageJsonPath = path.join(rootPath,'package.json')
  if ( fs.fileExists(packageJsonPath) )
    return require(packageJsonPath)
}


export function resolve ( rootPath:string ) {

  const packageJson = read(rootPath)

  if ( !packageJson || !packageJson.kio )
    return undefined

  const kio:any = packageJson.kio
  
  return function ( key:keyof TemplateOptions ) {

    if ( key in kio )
      return path.join(rootPath,kio[key])
  }
}

