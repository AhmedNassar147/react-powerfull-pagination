import React from "react";

export default interface PaginationItemProps {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
}
