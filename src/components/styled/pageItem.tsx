import styled from "styled-components";

interface StyleProps {
  disabled?: boolean;
  selected?: boolean;
  noBorder?: boolean;
}

export const PageItem = styled.li<StyleProps>`
  display: inline-block;
  min-width: 32px;
  height: 32px;
  margin-inline-end: 8px;
  font-family: Roboto;
  line-height: 30px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  background-color: #fff;
  border-radius: 4px;
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"} !important;
  ${({ noBorder, selected }) =>
    !noBorder &&
    `
    border: 1px solid ${selected ? "#d9d9d9" : "#d9d9d9"}`};
`;
