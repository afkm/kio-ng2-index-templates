"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("../fs");
const path = require("path");
function ngCliJson(rootPath) {
    const ngCliJsonPath = path.join(rootPath, '.angular-cli.json');
    if (fs.fileExists(ngCliJsonPath))
        return require(ngCliJsonPath);
}
exports.ngCliJson = ngCliJson;
function resolve(rootPath) {
    const ngCli = ngCliJson(rootPath);
    if (!ngCli || !ngCli.app)
        return undefined;
    const app = ngCli.app;
    const appRoot = path.join(rootPath, app.root);
    return function (key) {
        switch (key) {
            case 'templateHtml':
                return path.join(appRoot, app.index);
            case 'output':
                return app.outDir ? path.join(rootPath, app.outDir) : undefined;
            case 'i18n':
                if (!('assets' in app)) {
                    return undefined;
                }
                return app.assets
                    .map(f => path.join(appRoot, f))
                    .find(f => (fs.readdir(f, /\.json$/i) || []).length > 0);
        }
    };
}
exports.resolve = resolve;
//# sourceMappingURL=ng-cli.js.map