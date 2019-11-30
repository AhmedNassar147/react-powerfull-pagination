"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./paginationItem.css");
var memo = react_1.default.memo, useMemo = react_1.default.useMemo;
var PaginationItem = function (_a) {
    var disabled = _a.disabled, children = _a.children, onClick = _a.onClick, selected = _a.selected;
    var renderClassNames = useMemo(function () {
        var className = " ";
        if (selected)
            className += " selected";
        if (disabled)
            className += " disabled";
        return className;
    }, [disabled, selected]);
    return (react_1.default.createElement("li", { id: "page-item", onClick: onClick, className: renderClassNames }, children));
};
exports.default = memo(PaginationItem);
//# sourceMappingURL=PaginationItem.js.map