export interface Params {
  dataSource: any[];
  activePage: number;
  recordsPerPage: number;
}

export interface DataRendererResult {
  pageData: any[];
  isDsExsist: boolean;
  updateCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  updatePageSize: React.Dispatch<React.SetStateAction<number>>;
}
