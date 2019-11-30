"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var pageItem_1 = require("./styled/pageItem");
var memo = react_1.default.memo;
var PaginationItem = function (_a) {
    var disabled = _a.disabled, children = _a.children, onClick = _a.onClick, selected = _a.selected, noBorder = _a.noBorder;
    return (react_1.default.createElement(pageItem_1.PageItem, { onClick: onClick, disabled: disabled, selected: selected, noBorder: noBorder }, children));
};
exports.default = memo(PaginationItem);
//# sourceMappingURL=PaginationItem.js.map