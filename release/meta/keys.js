"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * keys that identify meta data
 */
exports.META_ID_KEYS = ['name', 'property'];
/**
 * @brief      find potential id key from keys in $attributes
 *
 * @param      attributes  meta tag attributes
 *
 * @return     The meta identifier key
 */
function getMetaIdKey(attributes) {
    return exports.META_ID_KEYS.find(k => k in attributes) || Object.keys(attributes)[0];
}
exports.getMetaIdKey = getMetaIdKey;
//# sourceMappingURL=keys.js.map