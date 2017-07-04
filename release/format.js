"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
/**
 * @brief      filename formatter 'dasherize'
 *
 * @param      outputPath  The output path
 * @param      filename    The filename
 * @param      locale      The locale
 *
 * @return     `outputPath/filename-locale.ext`
 */
exports.dasherize = (outputPath, filename, locale) => {
    const dirname = path.dirname(filename);
    const ext = path.extname(filename);
    const basename = path.basename(filename, ext);
    return path.join(outputPath, `${basename}-${locale}${ext}`);
};
//# sourceMappingURL=format.js.map