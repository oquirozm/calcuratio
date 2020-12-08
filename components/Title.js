import React from "react";
import styled from "styled-components";
import { color, space } from "styled-system";
import { prop } from "styled-tools";

const Title = styled.span.attrs( ({type = "h1", ...props }) => ({
  as: type,
  ...props,
}))`
  font-family: "Jost* 400 Book", sans-serif;
  font-size: ${prop("fontSize", "18")}px;
  letter-spacing: 0.5px;
  border-bottom: 2px solid black;
  ${space}
  ${color}
`;

export default Title;