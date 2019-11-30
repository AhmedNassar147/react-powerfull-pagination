"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (values) {
    var response = [];
    for (var index = 0; index < values.length; index++) {
        var _a = values[index], prev = _a.prev, next = _a.next;
        if (typeof prev === typeof next) {
            if (typeof prev === "object") {
                var isDiff = JSON.stringify(prev) !== JSON.stringify(next);
                response = __spreadArrays(response, [isDiff && next]);
            }
            else {
                response = __spreadArrays(response, [prev !== next && next]);
            }
        }
        else
            response = __spreadArrays(response, [next]);
    }
    return response;
});
//# sourceMappingURL=useComparison.js.map