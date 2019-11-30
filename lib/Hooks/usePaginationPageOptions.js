"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var usePrevious_1 = __importDefault(require("./usePrevious"));
var useComparison_1 = __importDefault(require("./useComparison"));
var useState = react_1.default.useState, useEffect = react_1.default.useEffect;
var usePaginationPageOptions = function (activePage, recordsPerPage) {
    var _a = useState(0), currentPage = _a[0], updateCurrentPage = _a[1];
    var _b = useState(0), pageSize = _b[0], updatePageSize = _b[1];
    var prevSize = usePrevious_1.default(recordsPerPage);
    var prevActivePage = usePrevious_1.default(activePage);
    var _c = useComparison_1.default([
        {
            prev: prevSize,
            next: recordsPerPage
        },
        {
            prev: prevActivePage,
            next: activePage
        }
    ]), isSizeChanged = _c[0], isActivePageChanged = _c[1];
    useEffect(function () {
        if (isSizeChanged) {
            updatePageSize(isSizeChanged);
        }
        if (isActivePageChanged) {
            updateCurrentPage(isActivePageChanged);
        }
    }, [isSizeChanged, isActivePageChanged, updatePageSize, updateCurrentPage]);
    return {
        currentPage: currentPage,
        pageSize: pageSize,
        updateCurrentPage: updateCurrentPage,
        updatePageSize: updatePageSize
    };
};
exports.default = usePaginationPageOptions;
//# sourceMappingURL=usePaginationPageOptions.js.map