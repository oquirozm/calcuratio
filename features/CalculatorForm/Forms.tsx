import styled from "styled-components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";
import { Flex } from "components";

const FormArea = styled(Flex).attrs((props) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  pt: 2,
  pb: 3,
  px: 3,
  mt: 0,
  mx: "auto",
}))`
  width: 100%;
  max-width: 600px;
  background-color: #f0f0f0;
  border-radius: 25px;
`;

const FieldGroup = styled(Flex).attrs((props) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mt: 3,
  ...props,
}))``;

const Label = styled.label`
  font-family: "Jost*", sans-serif;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: "Jost*", sans-serif;
  font-weight: 300;
  color: #6f6f6f;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
`;

const Input = styled.input<SpaceProps & LayoutProps>`
  ${space}
  ${layout}
  background-color: #fff;
  border: 0;
  border-radius: 1px;
  height: 30px;
  color: #000;
  font-family: "Jost*", sans-serif;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Span = styled.span`
  font-size: 25px;
  font-family: "Jost*", sans-serif;
  font-weight: 600;
`;

export const WidthForm = ({
  onHeightChange,
  onRatioXChange,
  onRatioYChange,
}) => {
  return (
    <FormArea>
      <FieldGroup>
        <Label>height</Label>
        <Paragraph>
          (in whatever measure unit, we’re talking proportions here)
        </Paragraph>
        <Input
          name="height"
          width={150}
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          onChange={(e) => onHeightChange(e.target.value)}
        />
      </FieldGroup>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={3}
      >
        <Label>your current aspect ratio</Label>
        <Paragraph>(e.g. 4:3 or 16:9)</Paragraph>
        <div className="aspect-radio-group-group">
          <Input
            width={80}
            mx={2}
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            name="xRatio"
            onChange={(e) => onRatioXChange(e.target.value)}
          />
          <Span>:</Span>
          <Input
            width={80}
            mx={2}
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            name="yRatio"
            onChange={(e) => onRatioYChange(e.target.value)}
          />
        </div>
      </Flex>
    </FormArea>
  );
};

export const HeightForm = ({
  onWidthChange,
  onRatioYChange,
  onRatioXChange,
}) => {
  return (
    <FormArea>
      <FieldGroup>
        <Label>width</Label>
        <Paragraph>
          (in whatever measure unit, we’re talking proportions here)
        </Paragraph>
        <Input
          width={150}
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          name="width"
          onChange={(e) => onWidthChange(e.target.value)}
        />
      </FieldGroup>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={3}
      >
        <Label>your current aspect ratio</Label>
        <Paragraph>(e.g. 4:3 or 16:9)</Paragraph>
        <div className="aspect-radio-input-group">
          <Input
            width={80}
            mx={2}
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            name="xRatio"
            onChange={(e) => onRatioXChange(e.target.value)}
          />
          <Span>:</Span>
          <Input
            width={80}
            mx={2}
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            name="yRatio"
            onChange={(e) => onRatioYChange(e.target.value)}
          />
        </div>
      </Flex>
    </FormArea>
  );
};

export const AspectRatioForm = ({
  onWidthChange,
  onHeightChange,
  onEnterKey,
}) => {
  return (
    <FormArea>
      <FieldGroup>
        <Label>width</Label>
        <Paragraph>
          (in whatever measure unit, we’re talking proportions here)
        </Paragraph>
        <Input
          width={150}
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          name="width"
          onChange={(e) => onWidthChange(e.target.value)}
          onKeyPress={onEnterKey}
        />
      </FieldGroup>
      <FieldGroup>
        <Label>height</Label>
        <Paragraph>
          (in whatever measure unit, we’re talking proportions here)
        </Paragraph>
        <Input
          width={150}
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          name="height"
          onChange={(e) => onHeightChange(e.target.value)}
          onKeyPress={onEnterKey}
        />
      </FieldGroup>
    </FormArea>
  );
};
