import React from "react";

type Placement = "bottom" | "top";
type ChildParams = { pageData: any[] };

export default interface Props {
  placement: Placement;
  dataSource: any[];
  onFetchMore: () => void;
  children: (childrenProps: ChildParams) => React.ReactNode;
  initialPageSizeOptions?: string[];
  initialRecordsPerPage: number;
  initialActivePage: number;
}
