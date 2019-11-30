"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
exports.PageItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  min-width: 32px;\n  height: 32px;\n  margin-inline-end: 8px;\n  font-family: Roboto;\n  line-height: 30px;\n  text-align: center;\n  vertical-align: middle;\n  list-style: none;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: ", " !important;\n  ", ";\n"], ["\n  display: inline-block;\n  min-width: 32px;\n  height: 32px;\n  margin-inline-end: 8px;\n  font-family: Roboto;\n  line-height: 30px;\n  text-align: center;\n  vertical-align: middle;\n  list-style: none;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: ",
    " !important;\n  ",
    ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return disabled ? "not-allowed" : "pointer";
}, function (_a) {
    var noBorder = _a.noBorder, selected = _a.selected;
    return !noBorder &&
        "\n    border: 1px solid " + (selected ? "#d9d9d9" : "#d9d9d9");
});
var templateObject_1;
//# sourceMappingURL=pageItem.js.map