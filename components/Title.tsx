import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { prop } from "styled-tools";

interface ITitleProps {
  type?: string;
}

const Title = styled.span.attrs<ITitleProps>(({ type = "h1", ...props }) => ({
  as: type,
  ...props,
}))<SpaceProps & ColorProps & TypographyProps & ITitleProps>`
  font-family: "Jost*", sans-serif;
  font-size: ${prop("fontSize", "18")}px;
  letter-spacing: 0.5px;
  border-bottom: 2px solid black;
  ${space}
  ${color}
  ${typography}
`;

export default Title;
