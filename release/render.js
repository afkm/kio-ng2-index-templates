"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs_1 = require("./fs");
const format = require("./format");
const template = require("./template");
const context = require("./context");
function readLocaleAsset(options, index) {
    return new Promise((resolve, reject) => {
        resolve(require(options.i18n[index]));
    });
}
function formatOutputFilename(options, locale) {
    const formatterName = options.format;
    const formatter = format[formatterName];
    return formatter(options.output, options.templateHtml, locale);
}
function formatSource(options, index) {
    const locale = path.basename(options.i18n[index], '.json');
    return {
        locale,
        data: require(options.i18n[index]),
        filename: formatOutputFilename(options, locale)
    };
}
function writeResult(renderer, source) {
    const rendered = renderer(source.data);
    return fs_1.writeFile(source.filename, rendered).then(() => {
        return {
            locale: source.locale,
            filename: source.filename,
            data: rendered
        };
    });
}
function renderIndexes(options) {
    return template.compile(options)
        .then(template => {
        const results = context.readContextForOptions(options);
        return Promise.all(results.map(template).map((html, idx) => {
            const jsonFile = options.i18n[idx];
            const suffix = path.extname(jsonFile);
            const locale = path.basename(jsonFile, suffix);
            const outFile = formatOutputFilename(options, locale);
            return fs_1.writeFile(outFile, html);
        }));
    })
        .then(() => {
        console.log('done');
    });
}
exports.renderIndexes = renderIndexes;
//# sourceMappingURL=render.js.map