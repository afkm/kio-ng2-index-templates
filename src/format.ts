import * as path from 'path'

/**
 * @brief      filename formatter 'dasherize'
 *
 * @param      outputPath  The output path
 * @param      filename    The filename
 * @param      locale      The locale
 *
 * @return     `outputPath/filename-locale.ext`
 */
export const dasherize = ( outputPath:string, filename:string, locale:string ):string => {
  const dirname = path.dirname(filename)
  const ext = path.extname(filename)
  const basename = path.basename(filename,ext)
  return path.join(outputPath,`${basename}-${locale}${ext}`)
}