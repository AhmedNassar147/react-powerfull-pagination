import React from "react";
declare type Placement = "bottom" | "top";
declare type ChildParams = {
    pageData: any[];
};
export default interface Props {
    placement: Placement;
    dataSource: any[];
    onFetchMore: () => void;
    children: (childrenProps: ChildParams) => React.ReactNode;
    initialPageSizeOptions?: string[];
    initialRecordsPerPage: number;
    initialActivePage: number;
}
export {};
//# sourceMappingURL=renderProps.interface.d.ts.map