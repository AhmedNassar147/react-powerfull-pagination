import React from "react";

export default interface ItemsProps {
  pagesNumbers: number[] | false;
  updateCurrentPage: (size: number | string) => void;
  onfetchMoreData: () => void;
  onUpdatePageSize: (size: number | string) => void;
  pageSize: number;
  pageSizeOptions?: string[];
  currentPage: number;
  disableNextIcon: boolean;
}
