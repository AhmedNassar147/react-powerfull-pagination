import WithPagination from "./components/withPaginationHoc";
import PaginationRenderProps from "./components/renderPropInjector";
import PaginationComponent from "./components/Pagination";
import PaginationItems from "./components/ItemsView";
import PaginationItem from "./components/PaginationItem";
declare const hooks: {
    useDataRenderer: (params: import("./interfaces/dataRenderer.interface").Params) => import("./interfaces/dataRenderer.interface").DataRendererResult;
    usePaginationPageOptions: (activePage: number, recordsPerPage: number) => import("./interfaces/paginationPageOptions.interface").default;
};
declare const helpers: {
    fetchPageNumbers: (pageNeighbours: number, totalPages: number, currentPage: number) => (string | number)[];
    getPageNumbers: (total: number, recordsPerPage: number) => number[];
    disableNextIcon: (total: number, pagesNumbersLength: number, pageSize: number) => boolean;
    createSelectOptions: (sizes: string[]) => {
        key: string | number;
        value: string;
    }[];
    SIDES: {
        LEFT_PAGE: string;
        RIGHT_PAGE: string;
    };
};
export { WithPagination, PaginationRenderProps, PaginationItem, PaginationItems, PaginationComponent, hooks, helpers };
//# sourceMappingURL=index.d.ts.map