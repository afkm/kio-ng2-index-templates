"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("./fs");
function readContext(filename) {
    return fs_1.readFile(filename).then(JSON.parse);
}
exports.readContext = readContext;
//# sourceMappingURL=source.js.map