"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes all '/', '\', and spaces from the beginning and end of the path
 * Replaces all '/', '\', and spaces between sections of the path
 * Adds prefix and suffix if supplied
 */
function normalisePath(path, withPrefix, withSuffix, skipPrefixAndSuffixIfEmpty) {
    if (skipPrefixAndSuffixIfEmpty === void 0) { skipPrefixAndSuffixIfEmpty = true; }
    if (!path && skipPrefixAndSuffixIfEmpty) {
        return '';
    }
    if (!path || typeof path !== 'string') {
        path = '' + path;
    }
    // normalise beginning and end of the path
    var normalised = path.replace(/^[/\\\s]+|[/\\\s]+$/g, '');
    // normalise path between it's sections
    normalised = normalised.replace(/[/\\\s]+|[/\\\s]+/g, '/');
    normalised = withPrefix ? withPrefix + normalised : normalised;
    normalised = withSuffix ? normalised + withSuffix : normalised;
    return normalised;
}
exports.normalisePath = normalisePath;
//# sourceMappingURL=pathUtils.js.map