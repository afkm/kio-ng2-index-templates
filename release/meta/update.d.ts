import { MetaAttributes } from './interfaces';
/**
 * @brief      create or find meta element in target document
 *
 * @param      target      The target document
 * @param      attributes  The attributes to apply to the meta element
 *
 * @return     meta element to which the attributes were applied
 */
export declare function createMetaTag(target: HTMLDocument, attributes: MetaAttributes): HTMLMetaElement;
export declare function addMetaElement(target: HTMLDocument, element: HTMLMetaElement): HTMLMetaElement;
export declare function addMetaContent(target: HTMLDocument, attributes: MetaAttributes): HTMLMetaElement;
