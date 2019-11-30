import WithPagination from "./components/withPaginationHoc";
import PaginationRenderProps from "./components/renderPropInjector";
import PaginationComponent from "./components/Pagination";
import PaginationItems from "./components/ItemsView";
import PaginationItem from "./components/PaginationItem";
import {
  fetchPageNumbers,
  getPageNumbers,
  disableNextIcon,
  createSelectOptions,
  SIDES
} from "./utils";
import useDataRenderer from "./Hooks/useDataRenderer";
import usePaginationPageOptions from "./Hooks/usePaginationPageOptions";

const hooks = {
  useDataRenderer,
  usePaginationPageOptions
};

const helpers = {
  fetchPageNumbers,
  getPageNumbers,
  disableNextIcon,
  createSelectOptions,
  SIDES
};

export {
  WithPagination,
  PaginationRenderProps,
  PaginationItem,
  PaginationItems,
  PaginationComponent,
  hooks,
  helpers
};
