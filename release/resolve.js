"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("./fs");
const config_1 = require("./config");
exports.SELF_ROOT = path.resolve(__dirname, '..');
exports.parentModuleRoot = path.resolve('./');
function i18nFile(lang, assetsPath) {
    return fs.readdir(assetsPath).filter(item => `${lang}.json` === item.toLowerCase())
        .map(item => path.join(assetsPath, item)).shift();
}
exports.i18nFile = i18nFile;
function templateHtml(rootPath, basename = 'index.html') {
    return [`./${basename}`, `./src/${basename}`]
        .map(filename => path.join(rootPath, filename))
        .filter(fs.fileExists);
}
exports.templateHtml = templateHtml;
function defaultConfig(rootPath = process.cwd()) {
    return (key) => {
        switch (key) {
            case "templateHtml":
                return path.join(rootPath, './dist/index.html');
            case "i18n":
                const assetsPath = path.join(rootPath, './src/assets/i18n');
                const files = fs.readdir(assetsPath, /\.json$/i);
                return (files || []).map(f => path.join(assetsPath, f));
            case "output":
                return path.join(rootPath, './dist');
        }
    };
}
exports.defaultConfig = defaultConfig;
/**
 * @brief      create a resolver for option keys based on $rootPath
 *
 * @param      rootPath  The root path
 *
 * @return     option resolver
 */
function options(rootPath = process.cwd()) {
    const ngCliConfig = config_1.ngCli.resolve(rootPath);
    const packageConfig = config_1.packageJson.resolve(rootPath);
    const defaults = defaultConfig(rootPath);
    return (key) => {
        return (packageConfig && packageConfig(key)) || (ngCliConfig && ngCliConfig(key)) || defaults(key);
    };
}
exports.options = options;
//# sourceMappingURL=resolve.js.map