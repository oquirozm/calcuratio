import styled from "styled-components";
import {
  layout,
  space,
  flexbox,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
} from "styled-system";

interface IFlexProps {
  type?: string;
}

const Flex = styled.div.attrs<IFlexProps>(({ type = "div", ...props }) => ({
  as: type,
  ...props,
}))<LayoutProps & SpaceProps & FlexboxProps>`
  display: flex;
  ${layout}
  ${space}
  ${flexbox}
`;

export default Flex;
