"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.default = (function (value) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = value;
    });
    return ref.current;
});
//# sourceMappingURL=usePrevious.js.map