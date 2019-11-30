"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGE_SIZE_OPTIONS = ["10", "20", "50", "100", "all"];
exports.disableNextIcon = function (total, pagesNumbersLength, pageSize) {
    if (total && pagesNumbersLength) {
        return pagesNumbersLength * pageSize >= total;
    }
    else
        return false;
};
exports.createSelectOptions = function (sizes) {
    sizes = sizes || exports.PAGE_SIZE_OPTIONS;
    return sizes.map(function (item) {
        var canBeNumber = !isNaN(+item);
        return {
            key: canBeNumber ? +item : item,
            value: canBeNumber ? item + " / page" : item
        };
    });
};
exports.getPageNumbers = function (total, recordsPerPage) {
    var pageNumbers = [];
    for (var page = 1; page <= Math.ceil(total / recordsPerPage); page++) {
        pageNumbers = __spreadArrays(pageNumbers, [page]);
    }
    return pageNumbers;
};
exports.SIDES = {
    LEFT_PAGE: "LEFT",
    RIGHT_PAGE: "RIGHT"
};
exports.range = function (from, to, step) {
    if (step === void 0) { step = 1; }
    var i = from;
    var range = [];
    while (i <= to) {
        range = __spreadArrays(range, [i]);
        i += step;
    }
    return range;
};
exports.fetchPageNumbers = function (pageNeighbours, totalPages, currentPage) {
    var totalNumbers = pageNeighbours * 2 + 2;
    if (totalPages > totalNumbers) {
        var pages = [];
        var leftBound = currentPage - pageNeighbours;
        var rightBound = currentPage + pageNeighbours;
        var beforeLastPage = totalPages - 1;
        var startPage = leftBound > 2 ? leftBound : 2;
        var endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;
        pages = exports.range(startPage, endPage);
        var pagesCount = pages.length;
        var singleSpillOffset = totalNumbers - pagesCount - 1;
        var leftSpill = startPage > 2;
        var rightSpill = endPage < beforeLastPage;
        var leftSpillPage = exports.SIDES.LEFT_PAGE;
        var rightSpillPage = exports.SIDES.RIGHT_PAGE;
        if (leftSpill && !rightSpill) {
            var extraPages = exports.range(startPage - singleSpillOffset, startPage - 1);
            pages = __spreadArrays([leftSpillPage], extraPages, pages);
        }
        else if (!leftSpill && rightSpill) {
            var extraPages = exports.range(endPage + 1, endPage + singleSpillOffset);
            pages = __spreadArrays(pages, extraPages, [rightSpillPage]);
        }
        else if (leftSpill && rightSpill) {
            pages = __spreadArrays([leftSpillPage], pages, [rightSpillPage]);
        }
        return __spreadArrays([1], pages, [totalPages]);
    }
    return exports.range(1, totalPages);
};
exports.isThereData = function (data) {
    return data && Array.isArray(data) && !!data.length;
};
//# sourceMappingURL=index.js.map