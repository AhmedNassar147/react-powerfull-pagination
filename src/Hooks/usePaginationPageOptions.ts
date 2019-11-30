import React from "react";
import usePrevious from "./usePrevious";
import useComparison from "./useComparison";
import PaginationPageOptionsResult from "../interfaces/paginationPageOptions.interface";

const { useState, useEffect } = React;

const usePaginationPageOptions = (
  activePage: number,
  recordsPerPage: number
): PaginationPageOptionsResult => {
  const [currentPage, updateCurrentPage] = useState(0);
  const [pageSize, updatePageSize] = useState(0);

  const prevSize = usePrevious(recordsPerPage);
  const prevActivePage = usePrevious(activePage);

  const [isSizeChanged, isActivePageChanged] = useComparison([
    {
      prev: prevSize,
      next: recordsPerPage
    },
    {
      prev: prevActivePage,
      next: activePage
    }
  ]);

  useEffect(() => {
    if (isSizeChanged) {
      updatePageSize(isSizeChanged as number);
    }
    if (isActivePageChanged) {
      updateCurrentPage(isActivePageChanged as number);
    }
  }, [isSizeChanged, isActivePageChanged, updatePageSize, updateCurrentPage]);

  return {
    currentPage,
    pageSize,
    updateCurrentPage,
    updatePageSize
  };
};

export default usePaginationPageOptions;
