import * as path from 'path'
import { readFile, writeFile } from './fs'
import hbars from 'handlebars'
import { TemplateOptions, TemplateOutputSource, TemplateOutputResult, Renderer } from './interfaces'
import * as resolve from './resolve'
import * as format from './format'
import * as template from './template'
import * as context from './context'


function readLocaleAsset ( options:TemplateOptions, index:number ):Promise<any[]> {
  return new Promise((resolve,reject)=>{
    resolve(require(options.i18n[index]))
  })
}


function formatOutputFilename ( options:TemplateOptions, locale ) {
  const formatterName = options.format
  const formatter = format[formatterName]
  return formatter(options.output,options.templateHtml,locale)
}

function formatSource ( options:TemplateOptions, index:number ):TemplateOutputSource {
  const locale = path.basename(options.i18n[index],'.json')
  return {
    locale,
    data: require(options.i18n[index]),
    filename: formatOutputFilename(options,locale)
  }
}

function writeResult ( renderer:{(data:any):string}, source:TemplateOutputSource ):Promise<TemplateOutputResult> {

  const rendered = renderer(source.data)
  return writeFile(source.filename,rendered).then ( () => {
    return {
      locale: source.locale,
      filename: source.filename,
      data: rendered
    }
  } )
}


export function renderIndexes ( options:TemplateOptions ) {
  return template.compile(options)
      .then ( template => {
        const results = context.readContextForOptions(options)
        return Promise.all(results.map ( template ).map ( (html,idx) => {
          const jsonFile = options.i18n[idx]
          const suffix = path.extname(jsonFile)
          const locale = path.basename(jsonFile,suffix)
          const outFile = formatOutputFilename(options,locale)
          return writeFile(outFile,html)
        } ))
      })
      .then ( () => {
        console.log('done')
      } )
}