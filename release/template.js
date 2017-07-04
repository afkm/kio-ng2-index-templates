"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("./fs");
const handlebars_1 = require("handlebars");
function compile(options) {
    return fs_1.readFile(options.templateHtml)
        .catch(error => {
        return Promise.reject(`Invalid file path "${options.templateHtml}"`);
    })
        .then(handlebars_1.default.compile)
        .then(compiler => {
        return (contextData, index) => compiler(contextData);
    });
}
exports.compile = compile;
//# sourceMappingURL=template.js.map