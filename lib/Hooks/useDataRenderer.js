"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var usePaginationPageOptions_1 = __importDefault(require("./usePaginationPageOptions"));
var utils_1 = require("../utils");
var useMemo = react_1.default.useMemo;
var useDataRenderer = function (params) {
    var activePage = params.activePage, dataSource = params.dataSource, recordsPerPage = params.recordsPerPage;
    var _a = usePaginationPageOptions_1.default(activePage, recordsPerPage), currentPage = _a.currentPage, pageSize = _a.pageSize, updateCurrentPage = _a.updateCurrentPage, updatePageSize = _a.updatePageSize;
    var isDsExsist = useMemo(function () { return utils_1.isThereData(dataSource); }, [dataSource]);
    if (!isDsExsist) {
        console.warn("data deosn't exsist, or you may provides wrong dataPropName");
    }
    var pageData = useMemo(function () {
        var ds = dataSource;
        if (isDsExsist) {
            var indexOfLastDataSource = currentPage * pageSize;
            var indexOfFistDataSource = indexOfLastDataSource - pageSize;
            ds = dataSource.slice(indexOfFistDataSource, indexOfLastDataSource);
        }
        return ds;
    }, [isDsExsist, dataSource, currentPage, pageSize]);
    return {
        pageData: pageData,
        isDsExsist: isDsExsist,
        updateCurrentPage: updateCurrentPage,
        updatePageSize: updatePageSize
    };
};
exports.default = useDataRenderer;
//# sourceMappingURL=useDataRenderer.js.map