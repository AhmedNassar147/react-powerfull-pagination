import React from "react";
import HocProps from "../interfaces/hoc.interface";
import useDataRenderer from "../Hooks/useDataRenderer";
import throwDataPropError from "../utils/throwDataPropError";

const { memo, useMemo, Suspense, lazy } = React;
const Pagination = lazy(() => import("./Pagination"));

export default ({
  WrappedComponent,
  placement,
  dataPropName,
  initialActivePage,
  initialPageSizeOptions,
  initialRecordsPerPage
}: HocProps) => {
  const WrapperComponent = (props: any): JSX.Element => {
    const isThereError = useMemo(() => throwDataPropError(dataPropName), [
      dataPropName
    ]);
    if (isThereError) {
      throw Error(isThereError);
    }

    const { [dataPropName]: dataSource, ...otherProps } = props;

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

    const { onFetchMore } = otherProps;

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
        <WrappedComponent {...otherProps} pageData={pageData} />
        {placement === "bottom" && renderPaginationComponent}
      </>
    );
  };
  return memo(WrapperComponent);
};
