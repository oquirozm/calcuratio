import { Component, forwardRef, createRef } from "react";
import styled from "styled-components";
import { Flex } from "../components";
import { space, layout } from "styled-system";

const FormArea = styled(Flex).attrs( props => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  pt: 2,
  pb: 3,
  px: 3,
  mt: 0,
  mx: "auto"
}))`
  width: 100%;
  max-width: 600px;
  background-color: #f0f0f0;
  border-radius: 25px;
`;

const FieldGroup = styled(Flex).attrs(props => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  mt: 3,
  ...props
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

const Input = styled.input`
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
`;

const Span = styled.span`
  font-size: 25px;
  font-family: "Jost*", sans-serif;
  font-weight: 600;
`;

const GetWidthForm = ({ onChangeHandler }) => {

  return (
    <FormArea>
      <FieldGroup>
        <Label>height</Label>
        <Paragraph>
          (in whatever measure unit, we’re talking proportions here)
        </Paragraph>
        <Input
          width={150}
          type="text"
          name="height"
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
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
            type="text"
            name="xRatio"
            onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
          />
          <Span>:</Span>
          <Input
            width={80}
            mx={2}
            type="text"
            name="yRatio"
            onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
          />
        </div>
      </Flex>
    </FormArea>
  );
};

const GetHeightForm = ({ onChangeHandler }) => {

  return (
    <FormArea>
      <FieldGroup>
        <Label>width</Label>
        <Paragraph>
          (in whatever measure unit, we’re talking proportions here)
        </Paragraph>
        <Input
          width={150}
          type="text"
          name="width"
          onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
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
            type="text"
            name="xRatio"
            onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
          />
          <Span>:</Span>
          <Input
            width={80}
            mx={2}
            type="text"
            name="yRatio"
            onChange={(e) => onChangeHandler(e.target.name, e.target.value)}
          />
        </div>
      </Flex>
    </FormArea>
  );
};

const GetAspectRatioForm = ({ onChangeHandler }) => {

  return (
    <FormArea>
      <FieldGroup>
        <Label>width</Label>
        <Paragraph>
          (in whatever measure unit, we’re talking proportions here)
        </Paragraph>
        <Input
          width={150}
          type="text"
          name="width"
          onChange={(e) =>
            onChangeHandler(e.target.name, e.target.value)
          }
        />
      </FieldGroup>
      <FieldGroup>
        <Label>height</Label>
        <Paragraph>
          (in whatever measure unit, we’re talking proportions here)
        </Paragraph>
        <Input
          width={150}
          type="text"
          name="height"
          onChange={(e) =>
            onChangeHandler(e.target.name, e.target.value)
          }
        />
      </FieldGroup>
    </FormArea>
  );
};

const UserInputForm = ({ mode, updateGlobalUserInputs }) => {

   switch (mode) {
     case "get_width":
       return (
         <GetWidthForm onChangeHandler={updateGlobalUserInputs} />
       );
     case "get_height":
       return (
         <GetHeightForm onChangeHandler={updateGlobalUserInputs} />
       );
     case "get_aspect_ratio":
       return (
         <GetAspectRatioForm
           onChangeHandler={updateGlobalUserInputs}
         />
       );
     default:
       return null;
   }
}

export default UserInputForm;
