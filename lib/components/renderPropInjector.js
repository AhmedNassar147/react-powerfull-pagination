"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useDataRenderer_1 = __importDefault(require("../Hooks/useDataRenderer"));
var memo = react_1.default.memo, useMemo = react_1.default.useMemo, Suspense = react_1.default.Suspense, lazy = react_1.default.lazy;
var Pagination = lazy(function () { return Promise.resolve().then(function () { return __importStar(require("./Pagination")); }); });
var RenderPropsInjector = function (_a) {
    var placement = _a.placement, children = _a.children, dataSource = _a.dataSource, onFetchMore = _a.onFetchMore, initialActivePage = _a.initialActivePage, initialRecordsPerPage = _a.initialRecordsPerPage, initialPageSizeOptions = _a.initialPageSizeOptions;
    var _b = useDataRenderer_1.default({
        activePage: initialActivePage,
        dataSource: dataSource,
        recordsPerPage: initialRecordsPerPage
    }), isDsExsist = _b.isDsExsist, pageData = _b.pageData, updateCurrentPage = _b.updateCurrentPage, updatePageSize = _b.updatePageSize;
    var renderPaginationComponent = useMemo(function () {
        if (isDsExsist)
            return (react_1.default.createElement(Suspense, { fallback: null },
                react_1.default.createElement(Pagination, { onfetchMore: onFetchMore, activePage: initialActivePage, pagesCount: (dataSource || []).length, pageSizeOptions: initialPageSizeOptions, recordsPerPage: initialRecordsPerPage, onChangePage: updateCurrentPage, onChangeSize: updatePageSize })));
        else
            return null;
    }, [isDsExsist, dataSource]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        placement === "top" && renderPaginationComponent,
        children && children({ pageData: pageData }),
        placement === "bottom" && renderPaginationComponent));
};
exports.default = memo(RenderPropsInjector);
//# sourceMappingURL=renderPropInjector.js.map