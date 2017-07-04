import { MetaAttributes } from './interfaces';
/**
 * keys that identify meta data
 */
export declare const META_ID_KEYS: string[];
/**
 * @brief      find potential id key from keys in $attributes
 *
 * @param      attributes  meta tag attributes
 *
 * @return     The meta identifier key
 */
export declare function getMetaIdKey(attributes: MetaAttributes): string;
