"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (dataPropName) {
    if (!dataPropName) {
        return "please provide your Data PropName";
    }
    if (dataPropName && typeof dataPropName !== "string") {
        return "dataPropName " + dataPropName + " should be string";
    }
});
//# sourceMappingURL=throwDataPropError.js.map