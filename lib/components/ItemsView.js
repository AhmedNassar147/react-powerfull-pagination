"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PaginationItem_1 = __importDefault(require("./PaginationItem"));
var utils_1 = require("../utils");
var memo = react_1.default.memo, useMemo = react_1.default.useMemo, useCallback = react_1.default.useCallback;
var PaginationItemsView = function (_a) {
    var updateCurrentPage = _a.updateCurrentPage, pagesNumbers = _a.pagesNumbers, onfetchMoreData = _a.onfetchMoreData, 
    // pageSize,
    // onUpdatePageSize,
    // pageSizeOptions,
    currentPage = _a.currentPage, disableNextIcon = _a.disableNextIcon;
    var pageNeighbours = Math.max(0, Math.min(1, 2));
    var totalPages = pagesNumbers ? pagesNumbers.length : 0;
    var fetchPages = useCallback(function () { return utils_1.fetchPageNumbers(pageNeighbours, totalPages, currentPage); }, [pageNeighbours, totalPages, currentPage]);
    var onSelectPage = useCallback(function (page) { return function () {
        updateCurrentPage(page);
    }; }, [updateCurrentPage, currentPage]);
    var onClickNextIcon = useCallback(function () {
        if (!disableNextIcon) {
            if (currentPage === totalPages) {
                if (onfetchMoreData)
                    return onfetchMoreData();
            }
            else
                return updateCurrentPage(currentPage + 1);
        }
    }, [
        currentPage,
        totalPages,
        updateCurrentPage,
        onfetchMoreData,
        disableNextIcon
    ]);
    var pages = useMemo(fetchPages, [fetchPages]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PaginationItem_1.default, { disabled: currentPage === 1, onClick: onSelectPage(currentPage === 1 ? currentPage : currentPage - 1), children: "<" }),
        pages.map(function (page, index) {
            if (page === utils_1.SIDES.LEFT_PAGE)
                return (react_1.default.createElement(PaginationItem_1.default, { key: index, disabled: currentPage === 1, onClick: onSelectPage(currentPage - pageNeighbours * 2 - 1), children: "<<" }));
            if (page === utils_1.SIDES.RIGHT_PAGE)
                return (react_1.default.createElement(PaginationItem_1.default, { key: index, disabled: currentPage === totalPages, onClick: onSelectPage(currentPage + pageNeighbours * 2 + 1), children: ">>" }));
            return (react_1.default.createElement(PaginationItem_1.default, { key: index, onClick: onSelectPage(page), children: page, selected: page === currentPage }));
        }),
        react_1.default.createElement(PaginationItem_1.default, { disabled: disableNextIcon, onClick: onClickNextIcon, children: ">" })));
};
exports.default = memo(PaginationItemsView);
//# sourceMappingURL=ItemsView.js.map