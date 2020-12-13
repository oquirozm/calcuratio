import styled from "styled-components";
import { layout, space, LayoutProps, SpaceProps } from "styled-system";

interface IBoxProps {
  type?: string;
}

const Box = styled.div.attrs<IBoxProps>(({ type = "div", ...props }) => ({
  as: type,
  ...props,
}))<LayoutProps & SpaceProps>`
  display: block;
  ${layout}
  ${space}
`;

export default Box;
