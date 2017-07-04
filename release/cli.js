"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const path = require("path");
const resolve_1 = require("./resolve");
const render_1 = require("./render");
const parseYargs = (args, cwd = process.cwd()) => {
    const optionResolver = resolve_1.options(cwd);
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
            coerce: (files) => files.map(file => path.resolve(file))
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
        .parse(args);
    return {
        templateHtml: argv.templateHtml,
        i18n: argv.i18n,
        output: argv.output,
        format: argv.format
    };
};
function cli(args) {
    const [ENV_NODE_BIN, ENV_EXEC, ...ENV_ARGS] = args;
    const argv = parseYargs(args);
    render_1.renderIndexes(argv)
        .catch(error => {
        console.error(error);
    });
}
exports.cli = cli;
//# sourceMappingURL=cli.js.map