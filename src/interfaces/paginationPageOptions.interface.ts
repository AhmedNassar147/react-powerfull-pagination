import React from "react";

export default interface PaginationPageOptionsResult {
  currentPage: number;
  pageSize: number;
  updateCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  updatePageSize: React.Dispatch<React.SetStateAction<number>>;
}
