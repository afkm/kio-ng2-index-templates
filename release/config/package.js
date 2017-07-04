"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("../fs");
const path = require("path");
function read(rootPath) {
    const packageJsonPath = path.join(rootPath, 'package.json');
    if (fs.fileExists(packageJsonPath))
        return require(packageJsonPath);
}
exports.read = read;
function resolve(rootPath) {
    const packageJson = read(rootPath);
    if (!packageJson || !packageJson.kio)
        return undefined;
    const kio = packageJson.kio;
    return function (key) {
        if (key in kio)
            return path.join(rootPath, kio[key]);
    };
}
exports.resolve = resolve;
//# sourceMappingURL=package.js.map