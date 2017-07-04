/// <reference types="node" />
import * as fs from 'fs';
export declare function statSync(filename: string): fs.Stats;
export declare function fileExists(filename: string): boolean;
export declare function dirExists(filename: string): boolean;
export declare function readdir(filepath: string, filter?: RegExp): string[];
export declare function readFile(filename: string): Promise<string>;
export declare function writeFile(filename: string, content: string): Promise<string>;
