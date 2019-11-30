"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var utils_1 = require("../utils");
var usePaginationPageOptions_1 = __importDefault(require("../Hooks/usePaginationPageOptions"));
var ItemsView_1 = __importDefault(require("./ItemsView"));
var useCallback = react_1.default.useCallback, useMemo = react_1.default.useMemo;
var Pagination = function (_a) {
    var pageSizeOptions = _a.pageSizeOptions, onfetchMore = _a.onfetchMore, recordsPerPage = _a.recordsPerPage, activePage = _a.activePage, pagesCount = _a.pagesCount, onChangePage = _a.onChangePage, onChangeSize = _a.onChangeSize;
    var _b = usePaginationPageOptions_1.default(activePage, recordsPerPage), currentPage = _b.currentPage, pageSize = _b.pageSize, updateCurrentPage = _b.updateCurrentPage, updatePageSize = _b.updatePageSize;
    var getPages = useCallback(utils_1.getPageNumbers, []);
    var pagesNumbers = useMemo(function () {
        if (pagesCount) {
            return getPages(pagesCount, pageSize);
        }
        return false;
    }, [pageSize, pagesCount, getPages]);
    var updateSelectPage = useCallback(function (page) {
        updateCurrentPage(+page);
        if (onChangePage) {
            onChangePage(+page);
        }
    }, [updateCurrentPage, onChangePage]);
    var onUpdatePageSize = useCallback(function (value) {
        var size = typeof value === "number" ? value : pagesCount ? pagesCount : 0;
        updatePageSize(size);
        updateSelectPage(1);
        if (onChangeSize) {
            onChangeSize(size);
        }
    }, [updateSelectPage, updatePageSize, pagesCount, onChangeSize]);
    var checkShouldDisableNextIcon = useCallback(function (pagesLen) { return utils_1.disableNextIcon(pagesCount, pagesLen, pageSize); }, [pagesCount, pageSize]);
    var nextIconDisabled = useMemo(function () {
        var len = pagesNumbers ? pagesNumbers.length : 0;
        return checkShouldDisableNextIcon(len);
    }, [checkShouldDisableNextIcon, pagesNumbers]);
    var paginationView = (react_1.default.createElement("section", { id: "lib-container-flex" },
        react_1.default.createElement("ul", { id: "lib-pagination-list" },
            react_1.default.createElement(ItemsView_1.default, { onfetchMoreData: onfetchMore, pageSize: pageSize, pageSizeOptions: pageSizeOptions, currentPage: currentPage, disableNextIcon: nextIconDisabled, updateCurrentPage: updateSelectPage, onUpdatePageSize: onUpdatePageSize, pagesNumbers: pagesNumbers }))));
    return paginationView;
};
Pagination.defaultProps = {
    pageSizeOptions: utils_1.PAGE_SIZE_OPTIONS,
    activePage: 1,
    recordsPerPage: 10,
    pagesCount: 10
};
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map