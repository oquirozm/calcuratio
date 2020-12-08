import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";

const Box = styled.div.attrs(({ type = "div", ...props }) => ({
  as: type,
  ...props,
}))`
  display: block;
  ${layout}
  ${space}
`;

export default Box;
