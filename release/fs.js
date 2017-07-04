"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function statSync(filename) {
    let stat;
    let error;
    try {
        stat = fs.statSync(filename);
    }
    catch (e) {
        error = e;
    }
    if (error)
        return undefined;
    return stat;
}
exports.statSync = statSync;
function fileExists(filename) {
    let stat = statSync(filename);
    return stat && stat.isFile();
}
exports.fileExists = fileExists;
function dirExists(filename) {
    let stat = statSync(filename);
    return stat && stat.isDirectory();
}
exports.dirExists = dirExists;
function readdir(filepath, filter) {
    if (!dirExists(filepath))
        return undefined;
    const items = fs.readdirSync(filepath);
    if (filter)
        return items.filter(f => filter.test(f));
    return items;
}
exports.readdir = readdir;
function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, content) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(content);
            }
        });
    });
}
exports.readFile = readFile;
function writeFile(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, 'utf8', (error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
}
exports.writeFile = writeFile;
//# sourceMappingURL=fs.js.map