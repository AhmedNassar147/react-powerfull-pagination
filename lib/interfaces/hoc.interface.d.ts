import React from "react";
declare type Placement = "bottom" | "top";
export default interface HocProps {
    placement: Placement;
    WrappedComponent: React.ElementType;
    dataPropName: string;
    initialPageSizeOptions?: string[];
    initialRecordsPerPage: number;
    initialActivePage: number;
}
export {};
//# sourceMappingURL=hoc.interface.d.ts.map