import React from "react";
import styled from "styled-components";
import { color, space } from "styled-system";
import { prop } from "styled-tools";

const Text = styled.span.attrs(({ type = "span" }) => ({
  as: type,
}))`
  font-family: "Jost*", sans-serif;
  font-weight: 600;
  font-size: ${prop("fontSize", "15")}px;
  letter-spacing: 0.5px;
  ${color}
  ${space}
`;

export default Text;