import styled from "styled-components";

export const WrapperFlex = styled.section`
  display: flex;
  flex-direction: row;
  height: 38px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 9px 0px 0px 0px;
`;

export const PaginationList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
`;
