import { readFile } from './fs'
import { TemplateOptions, Renderer } from './interfaces'


export function readContext ( filename:string ) {
  return readFile (filename).then ( JSON.parse )
}

export function readContextForOptions ( options:TemplateOptions ) {
  return options.i18n.map ( file => require(file) )
}