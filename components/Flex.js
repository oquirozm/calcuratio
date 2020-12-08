import React from "react";
import styled from "styled-components";
import { layout, space, flexbox } from "styled-system"

const Flex = styled.div.attrs(({type = "div", ...props}) => ({
  as: type,
  ...props,
}))`
  display: flex;
  ${layout}
  ${space}
  ${flexbox}
`;

export default Flex;