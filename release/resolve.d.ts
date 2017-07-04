import { TemplateOptions } from './interfaces';
export declare const SELF_ROOT: string;
export declare const parentModuleRoot: string;
export declare function i18nFile(lang: string, assetsPath: string): string;
export declare function templateHtml(rootPath: string, basename?: string): string[];
export declare function defaultConfig(rootPath?: string): <K extends "templateHtml" | "i18n" | "output" | "format">(key: K) => TemplateOptions[K];
/**
 * @brief      create a resolver for option keys based on $rootPath
 *
 * @param      rootPath  The root path
 *
 * @return     option resolver
 */
export declare function options(rootPath?: string): <K extends "templateHtml" | "i18n" | "output" | "format">(key: K) => TemplateOptions[K];
