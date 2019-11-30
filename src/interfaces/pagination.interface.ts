import React from "react";

export default interface PaginationProps {
  pageSizeOptions?: string[];
  recordsPerPage: number;
  onfetchMore: () => void;
  activePage: number;
  pagesCount: number;
  onChangePage?: React.Dispatch<React.SetStateAction<number>>;
  onChangeSize?: React.Dispatch<React.SetStateAction<number>>;
}
