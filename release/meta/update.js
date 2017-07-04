"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("./keys");
function applyAttributes(target, attributes) {
    Object.keys(attributes).forEach(key => {
        target.setAttribute(key, attributes[key]);
    });
}
/**
 * @brief      create or find meta element in target document
 *
 * @param      target      The target document
 * @param      attributes  The attributes to apply to the meta element
 *
 * @return     meta element to which the attributes were applied
 */
function createMetaTag(target, attributes) {
    const metaKey = keys_1.getMetaIdKey(attributes);
    const metaKeyValue = attributes[metaKey];
    let metaTag = target.querySelector(`meta[${metaKey}="${metaKeyValue}"]`);
    if (!metaTag) {
        metaTag = target.createElement('meta');
    }
    applyAttributes(metaTag, attributes);
    return metaTag;
}
exports.createMetaTag = createMetaTag;
function addMetaElement(target, element) {
    return target.querySelector('head').appendChild(element);
}
exports.addMetaElement = addMetaElement;
function addMetaContent(target, attributes) {
    const metaTag = createMetaTag(target, attributes);
    return addMetaElement(target, metaTag);
}
exports.addMetaContent = addMetaContent;
//# sourceMappingURL=update.js.map