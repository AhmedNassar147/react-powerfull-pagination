import React from "react";
import PaginationItemProps from "../interfaces/paginationItem.interface";
import { PageItem } from "./styled/pageItem";

const { memo } = React;

const PaginationItem: React.FC<PaginationItemProps> = ({
  disabled,
  children,
  onClick,
  selected,
  noBorder
}): JSX.Element => (
  <PageItem
    onClick={onClick}
    disabled={disabled}
    selected={selected}
    noBorder={noBorder}
  >
    {children}
  </PageItem>
);

export default memo(PaginationItem);
