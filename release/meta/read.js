"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
function readFile(filepath) {
    return jsdom_1.JSDOM.fromFile(filepath);
}
exports.readFile = readFile;
//# sourceMappingURL=read.js.map