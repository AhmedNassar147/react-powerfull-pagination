import React from "react";
import PaginationItem from "./PaginationItem";
import { SIDES, fetchPageNumbers } from "../utils";
import PaginationItemsProps from "../interfaces/items.interface";

const { memo, useMemo, useCallback } = React;

const PaginationItemsView: React.FC<PaginationItemsProps> = ({
  updateCurrentPage,
  pagesNumbers,
  onfetchMoreData,
  // pageSize,
  // onUpdatePageSize,
  // pageSizeOptions,
  currentPage,
  disableNextIcon
}): JSX.Element => {
  const pageNeighbours: number = Math.max(0, Math.min(1, 2));
  const totalPages: number = pagesNumbers ? pagesNumbers.length : 0;

  const fetchPages = useCallback(
    () => fetchPageNumbers(pageNeighbours, totalPages, currentPage),
    [pageNeighbours, totalPages, currentPage]
  );

  const onSelectPage = useCallback(
    (page: number) => () => {
      updateCurrentPage(page);
    },
    [updateCurrentPage, currentPage]
  );

  const onClickNextIcon = useCallback(() => {
    if (!disableNextIcon) {
      if (currentPage === totalPages) {
        if (onfetchMoreData) return onfetchMoreData();
      } else return updateCurrentPage(currentPage + 1);
    }
  }, [
    currentPage,
    totalPages,
    updateCurrentPage,
    onfetchMoreData,
    disableNextIcon
  ]);

  const pages = useMemo(fetchPages, [fetchPages]);

  return (
    <>
      <PaginationItem
        disabled={currentPage === 1}
        onClick={onSelectPage(
          currentPage === 1 ? currentPage : currentPage - 1
        )}
        children="<"
      />

      {pages.map((page, index) => {
        if (page === SIDES.LEFT_PAGE)
          return (
            <PaginationItem
              key={index}
              disabled={currentPage === 1}
              onClick={onSelectPage(currentPage - pageNeighbours * 2 - 1)}
              children="<<"
            />
          );

        if (page === SIDES.RIGHT_PAGE)
          return (
            <PaginationItem
              key={index}
              disabled={currentPage === totalPages}
              onClick={onSelectPage(currentPage + pageNeighbours * 2 + 1)}
              children=">>"
            />
          );

        return (
          <PaginationItem
            key={index}
            onClick={onSelectPage(page as number)}
            children={page}
            selected={page === currentPage}
          />
        );
      })}

      <PaginationItem
        disabled={disableNextIcon}
        onClick={onClickNextIcon}
        children=">"
      />
    </>
  );
};

export default memo(PaginationItemsView);
