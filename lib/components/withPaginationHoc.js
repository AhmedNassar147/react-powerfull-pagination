"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var throwDataPropError_1 = __importDefault(require("../utils/throwDataPropError"));
var memo = react_1.default.memo, useMemo = react_1.default.useMemo, Suspense = react_1.default.Suspense, lazy = react_1.default.lazy;
var Pagination = lazy(function () { return Promise.resolve().then(function () { return __importStar(require("./Pagination")); }); });
exports.default = (function (_a) {
    var WrappedComponent = _a.WrappedComponent, placement = _a.placement, dataPropName = _a.dataPropName, initialActivePage = _a.initialActivePage, initialPageSizeOptions = _a.initialPageSizeOptions, initialRecordsPerPage = _a.initialRecordsPerPage;
    var WrapperComponent = function (props) {
        var isThereError = useMemo(function () { return throwDataPropError_1.default(dataPropName); }, [
            dataPropName
        ]);
        if (isThereError) {
            throw Error(isThereError);
        }
        var _a = dataPropName, dataSource = props[_a], otherProps = __rest(props, [typeof _a === "symbol" ? _a : _a + ""]);
        var _b = useDataRenderer_1.default({
            activePage: initialActivePage,
            dataSource: dataSource,
            recordsPerPage: initialRecordsPerPage
        }), isDsExsist = _b.isDsExsist, pageData = _b.pageData, updateCurrentPage = _b.updateCurrentPage, updatePageSize = _b.updatePageSize;
        var onFetchMore = otherProps.onFetchMore;
        var renderPaginationComponent = useMemo(function () {
            if (isDsExsist)
                return (react_1.default.createElement(Suspense, { fallback: null },
                    react_1.default.createElement(Pagination, { onfetchMore: onFetchMore, activePage: initialActivePage, pagesCount: (dataSource || []).length, pageSizeOptions: initialPageSizeOptions, recordsPerPage: initialRecordsPerPage, onChangePage: updateCurrentPage, onChangeSize: updatePageSize })));
            else
                return null;
        }, [isDsExsist, dataSource]);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            placement === "top" && renderPaginationComponent,
            react_1.default.createElement(WrappedComponent, __assign({}, otherProps, { pageData: pageData })),
            placement === "bottom" && renderPaginationComponent));
    };
    return memo(WrapperComponent);
});
//# sourceMappingURL=withPaginationHoc.js.map