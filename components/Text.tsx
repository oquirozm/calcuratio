import styled from "styled-components";
import {
  color,
  space,
  ColorProps,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { prop } from "styled-tools";

interface ITextProps {
  type?: string;
}

const Text = styled.span.attrs<ITextProps>(({ type = "span" }) => ({
  as: type,
}))<ColorProps & SpaceProps & TypographyProps & ITextProps>`
  font-family: "Jost*", sans-serif;
  font-weight: 600;
  font-size: ${prop("fontSize", "15")}px;
  letter-spacing: 0.5px;
  ${color}
  ${space}
  ${typography}
`;

export default Text;
