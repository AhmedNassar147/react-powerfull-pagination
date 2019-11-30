import React from "react";
import PaginationItemProps from "../interfaces/paginationItem.interface";
import "./paginationItem.css";

const { memo, useMemo } = React;

const PaginationItem: React.FC<PaginationItemProps> = ({
  disabled,
  children,
  onClick,
  selected
}): JSX.Element => {
  const renderClassNames = useMemo(() => {
    let className: string = " ";
    if (selected) className += " selected";
    if (disabled) className += " disabled";
    return className;
  }, [disabled, selected]);

  return (
    <li id="page-item" onClick={onClick} className={renderClassNames}>
      {children}
    </li>
  );
};

export default memo(PaginationItem);
