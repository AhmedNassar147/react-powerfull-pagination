import React from "react";
import "./index.css";
import PaginationProps from "../interfaces/pagination.interface";
import { PAGE_SIZE_OPTIONS, getPageNumbers, disableNextIcon } from "../utils";
import usePaginationPageOptions from "../Hooks/usePaginationPageOptions";
import PaginationItemsView from "./ItemsView";

const { useCallback, useMemo } = React;

const Pagination: React.FC<PaginationProps> = ({
  pageSizeOptions,
  onfetchMore,
  recordsPerPage,
  activePage,
  pagesCount,
  onChangePage,
  onChangeSize
}): JSX.Element => {
  const {
    currentPage,
    pageSize,
    updateCurrentPage,
    updatePageSize
  } = usePaginationPageOptions(activePage, recordsPerPage);

  const getPages = useCallback(getPageNumbers, []);

  const pagesNumbers = useMemo(() => {
    if (pagesCount) {
      return getPages(pagesCount, pageSize);
    }
    return false;
  }, [pageSize, pagesCount, getPages]);

  const updateSelectPage = useCallback(
    (page: number | string) => {
      updateCurrentPage(+page);
      if (onChangePage) {
        onChangePage(+page);
      }
    },
    [updateCurrentPage, onChangePage]
  );

  const onUpdatePageSize = useCallback(
    (value: string | number) => {
      const size =
        typeof value === "number" ? value : pagesCount ? pagesCount : 0;
      updatePageSize(size);
      updateSelectPage(1);
      if (onChangeSize) {
        onChangeSize(size);
      }
    },
    [updateSelectPage, updatePageSize, pagesCount, onChangeSize]
  );

  const checkShouldDisableNextIcon = useCallback(
    pagesLen => disableNextIcon(pagesCount, pagesLen, pageSize),
    [pagesCount, pageSize]
  );

  const nextIconDisabled = useMemo(() => {
    let len = pagesNumbers ? pagesNumbers.length : 0;
    return checkShouldDisableNextIcon(len);
  }, [checkShouldDisableNextIcon, pagesNumbers]);

  const paginationView: JSX.Element = (
    <section id="lib-container-flex">
      <ul id="lib-pagination-list">
        <PaginationItemsView
          onfetchMoreData={onfetchMore}
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
          currentPage={currentPage}
          disableNextIcon={nextIconDisabled}
          updateCurrentPage={updateSelectPage}
          onUpdatePageSize={onUpdatePageSize}
          pagesNumbers={pagesNumbers}
        />
      </ul>
    </section>
  );

  return paginationView;
};

Pagination.defaultProps = {
  pageSizeOptions: PAGE_SIZE_OPTIONS,
  activePage: 1,
  recordsPerPage: 10,
  pagesCount: 10
};

export default Pagination;
