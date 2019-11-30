export declare const PAGE_SIZE_OPTIONS: string[];
export declare const disableNextIcon: (total: number, pagesNumbersLength: number, pageSize: number) => boolean;
export declare const createSelectOptions: (sizes: string[]) => {
    key: string | number;
    value: string;
}[];
export declare const getPageNumbers: (total: number, recordsPerPage: number) => number[];
export declare const SIDES: {
    LEFT_PAGE: string;
    RIGHT_PAGE: string;
};
export declare const range: (from: number, to: number, step?: number) => number[];
export declare const fetchPageNumbers: (pageNeighbours: number, totalPages: number, currentPage: number) => (string | number)[];
export declare const isThereData: <T>(data: T[]) => boolean;
//# sourceMappingURL=index.d.ts.map