import { TemplateOptions, TemplateOutputSource, TemplateOutputResult, Renderer, RendererData } from './interfaces'
import { readFile } from './fs'
import hbars from 'handlebars'


export function compile ( options:TemplateOptions ):Promise<Renderer> {
  return readFile(options.templateHtml)
      .catch ( error => {
        return Promise.reject(`Invalid file path "${options.templateHtml}"`)
      } )
      .then ( hbars.compile )
      .then ( compiler => {
        return ( contextData:RendererData, index:number ):string => compiler(contextData)
      } )
}