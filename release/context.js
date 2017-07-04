"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("./fs");
function readContext(filename) {
    return fs_1.readFile(filename).then(JSON.parse);
}
exports.readContext = readContext;
function readContextForOptions(options) {
    return options.i18n.map(file => require(file));
}
exports.readContextForOptions = readContextForOptions;
//# sourceMappingURL=context.js.map