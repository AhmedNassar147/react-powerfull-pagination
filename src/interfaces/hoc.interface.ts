import React from "react";

type Placement = "bottom" | "top";

export default interface HocProps {
  placement: Placement;
  WrappedComponent: React.ElementType;
  dataPropName: string;
  initialPageSizeOptions?: string[];
  initialRecordsPerPage: number;
  initialActivePage: number;
}
