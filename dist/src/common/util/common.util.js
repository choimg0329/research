"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrUndefined = isNullOrUndefined;
exports.isEmptyString = isEmptyString;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyArray = isEmptyArray;
exports.formatDate = formatDate;
exports.formatDateTime = formatDateTime;
exports.toCamelCase = toCamelCase;
exports.toSnakeCase = toSnakeCase;
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyString(value) {
    return value === null || value === undefined || value.trim() === '';
}
function isEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0;
}
function isEmptyArray(arr) {
    return !arr || arr.length === 0;
}
function formatDate(date) {
    return date.toISOString().split('T')[0];
}
function formatDateTime() {
    return new Date().toISOString().replace('T', ' ').substring(0, 19);
}
function toCamelCase(str) {
    return str.replace(/([-_][a-z])/g, (group) => group.replace('-', '').replace('_', '').toUpperCase());
}
function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
//# sourceMappingURL=common.util.js.map