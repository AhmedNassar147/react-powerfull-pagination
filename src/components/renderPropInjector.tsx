import React from "react";
import ViewProps from "../interfaces/renderProps.interface";
import useDataRenderer from "../Hooks/useDataRenderer";

const { memo, useMemo, Suspense, lazy } = React;
const Pagination = lazy(() => import("./Pagination"));

const RenderPropsInjector: React.FC<ViewProps> = ({
  placement,
  children,
  dataSource,
  onFetchMore,
  initialActivePage,
  initialRecordsPerPage,
  initialPageSizeOptions
}): JSX.Element => {
  const {
    isDsExsist,
    pageData,
    updateCurrentPage,
    updatePageSize
  } = useDataRenderer({
    activePage: initialActivePage,
    dataSource,
    recordsPerPage: initialRecordsPerPage
  });

  const renderPaginationComponent = useMemo(() => {
    if (isDsExsist)
      return (
        <Suspense fallback={null}>
          <Pagination
            onfetchMore={onFetchMore}
            activePage={initialActivePage}
            pagesCount={(dataSource || []).length}
            pageSizeOptions={initialPageSizeOptions}
            recordsPerPage={initialRecordsPerPage}
            onChangePage={updateCurrentPage}
            onChangeSize={updatePageSize}
          />
        </Suspense>
      );
    else return null;
  }, [isDsExsist, dataSource]);

  return (
    <>
      {placement === "top" && renderPaginationComponent}
      {children && children({ pageData })}
      {placement === "bottom" && renderPaginationComponent}
    </>
  );
};

export default memo(RenderPropsInjector);
