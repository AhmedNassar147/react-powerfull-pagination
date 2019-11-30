"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var withPaginationHoc_1 = __importDefault(require("./components/withPaginationHoc"));
exports.WithPagination = withPaginationHoc_1.default;
var renderPropInjector_1 = __importDefault(require("./components/renderPropInjector"));
exports.PaginationRenderProps = renderPropInjector_1.default;
var Pagination_1 = __importDefault(require("./components/Pagination"));
exports.PaginationComponent = Pagination_1.default;
var ItemsView_1 = __importDefault(require("./components/ItemsView"));
exports.PaginationItems = ItemsView_1.default;
var PaginationItem_1 = __importDefault(require("./components/PaginationItem"));
exports.PaginationItem = PaginationItem_1.default;
var utils_1 = require("./utils");
var useDataRenderer_1 = __importDefault(require("./Hooks/useDataRenderer"));
var usePaginationPageOptions_1 = __importDefault(require("./Hooks/usePaginationPageOptions"));
var hooks = {
    useDataRenderer: useDataRenderer_1.default,
    usePaginationPageOptions: usePaginationPageOptions_1.default
};
exports.hooks = hooks;
var helpers = {
    fetchPageNumbers: utils_1.fetchPageNumbers,
    getPageNumbers: utils_1.getPageNumbers,
    disableNextIcon: utils_1.disableNextIcon,
    createSelectOptions: utils_1.createSelectOptions,
    SIDES: utils_1.SIDES
};
exports.helpers = helpers;
//# sourceMappingURL=index.js.map