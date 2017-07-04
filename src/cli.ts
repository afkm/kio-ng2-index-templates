import * as yargs from 'yargs'
import * as path from 'path'

import { TemplateOptions } from './interfaces'

import { SELF_ROOT, parentModuleRoot, options } from './resolve'
import { renderIndexes } from './render'

const parseYargs = ( args:string[], cwd:string=process.cwd() ):TemplateOptions => {
  const optionResolver = options(cwd)
  const argv = yargs
    .options({
      templateHtml: {
        alias: ['html', 't'],
        demand: true,
        type: 'string',
        default: optionResolver('templateHtml'),
        description: 'Template file to use for rendering'
      },
      i18n: {
        alias: 'i',
        demand: true,
        type: 'array',
        default: optionResolver('i18n'),
        description: 'json files to use for translation. name is used as name suffix for output file.',
        coerce: ( files:string[] ) => files.map ( file => path.resolve(file) )
      },
      output: {
        alias: 'o',
        demand: true,
        type: 'string',
        description: 'Output directory',
        default: optionResolver('output')
      },
      format: {
        alias: 'f',
        type: 'string',
        choices: ['dasherize'],
        default: 'dasherize'
      }
    })
    .help('h')
    .usage('$0 --templateHtml ./src/index.html -i|--i18n ./src/assets/i18n/*.json -o ./dist')
    .wrap(yargs.terminalWidth())
    .parse(args)
  
  return {
    templateHtml: argv.templateHtml,
    i18n: argv.i18n,
    output: argv.output,
    format: argv.format
  }

}

export function cli ( args:string[] ) {

  const [ ENV_NODE_BIN, ENV_EXEC, ...ENV_ARGS ] = args

  const argv = parseYargs(args)

  renderIndexes(argv)
    .catch ( error => {
      console.error(error)      
    })
  
}