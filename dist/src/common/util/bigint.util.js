"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigIntToString = bigIntToString;
function bigIntToString(obj) {
    return JSON.parse(JSON.stringify(obj, (key, value) => typeof value === 'bigint' ? value.toString() : value));
}
//# sourceMappingURL=bigint.util.js.map