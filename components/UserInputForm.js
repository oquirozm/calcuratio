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
  font-family: "Jost* 500", sans-serif;
  font-size: 25px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: "Jost* 300", sans-serif;
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
  font-family: "Jost* 600 Semi", sans-serif;
  font-size: 25px;
  text-align: center;
`;

const Span = styled.span`
  font-size: 25px;
  font-family: "Jost* 600 Semi", sans-serif;
`;

const GetWidthForm = props => {
  const updateStateWithUserInput = (key, value) => {
    // update the parent component's state
    props.onChangeHandler(key, value);
  };

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
          onChange={(e) =>
            updateStateWithUserInput(e.target.name, e.target.value)
          }
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
            onChange={(e) =>
              updateStateWithUserInput(e.target.name, e.target.value)
            }
          />
          <Span>:</Span>
          <Input
            width={80}
            mx={2}
            type="text"
            name="yRatio"
            onChange={(e) =>
              updateStateWithUserInput(e.target.name, e.target.value)
            }
          />
        </div>
      </Flex>
    </FormArea>
  );
};

const GetHeightForm = props => {
  const updateStateWithUserInput = (key, value) => {
    // update the parent component's state
    props.onChangeHandler(key, value);
  };

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
            updateStateWithUserInput(e.target.name, e.target.value)
          }
        />
      </FieldGroup>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" mt={3}>
        <Label>your current aspect ratio</Label>
        <Paragraph>(e.g. 4:3 or 16:9)</Paragraph>
        <div className="aspect-radio-input-group">
          <Input
            type="text"
            name="xRatio"
            onChange={(e) =>
              updateStateWithUserInput(e.target.name, e.target.value)
            }
          />
          <Span>:</Span>
          <Input
            type="text"
            name="yRatio"
            onChange={(e) =>
              updateStateWithUserInput(e.target.name, e.target.value)
            }
          />
        </div>
      </Flex>
    </FormArea>
  );
};

const GetAspectRatioForm = props => {
  const updateStateWithUserInput = (key, value) => {
    // update the parent component's state
    props.onChangeHandler(key, value);
  };

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
            updateStateWithUserInput(e.target.name, e.target.value)
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
            updateStateWithUserInput(e.target.name, e.target.value)
          }
        />
      </FieldGroup>
    </FormArea>
  );
};

class UserInputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.mode) {
      case "get_width":
        return (
          <GetWidthForm onChangeHandler={this.props.updateGlobalUserInputs} />
        );
      case "get_height":
        return (
          <GetHeightForm onChangeHandler={this.props.updateGlobalUserInputs} />
        );
      case "get_aspect_ratio":
        return (
          <GetAspectRatioForm
            onChangeHandler={this.props.updateGlobalUserInputs}
          />
        );
      default:
        return null;
    }
  }
}

export default UserInputForm;
