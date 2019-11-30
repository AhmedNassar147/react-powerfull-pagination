import React from "react";
import usePaginationPageOptions from "./usePaginationPageOptions";
import {
  Params,
  DataRendererResult
} from "../interfaces/dataRenderer.interface";
import { isThereData } from "../utils";

const { useMemo } = React;

const useDataRenderer = (params: Params): DataRendererResult => {
  const { activePage, dataSource, recordsPerPage } = params;

  const {
    currentPage,
    pageSize,
    updateCurrentPage,
    updatePageSize
  } = usePaginationPageOptions(activePage, recordsPerPage);

  const isDsExsist = useMemo(() => isThereData(dataSource), [dataSource]);

  if (!isDsExsist) {
    console.warn(`data deosn't exsist, or you may provides wrong dataPropName`);
  }
  const pageData = useMemo(() => {
    let ds: any[] = dataSource;
    if (isDsExsist) {
      const indexOfLastDataSource = currentPage * pageSize;
      const indexOfFistDataSource = indexOfLastDataSource - pageSize;
      ds = dataSource.slice(indexOfFistDataSource, indexOfLastDataSource);
    }

    return ds;
  }, [isDsExsist, dataSource, currentPage, pageSize]);

  return {
    pageData,
    isDsExsist,
    updateCurrentPage,
    updatePageSize
  };
};

export default useDataRenderer;
