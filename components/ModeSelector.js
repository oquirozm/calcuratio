import React from "react";
import styled from "styled-components";
import { Flex } from "../components";

const cssVars = {
  borderRadius: "1px",
  backgroundColor: "#938eed",
  hoverBackgroundColor: "#6979ba",
};

const Button = styled.div`
  display: block;
  width: 160px;
  margin: 0 20px;
  padding: 10px;
  height: auto;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-family: "Jost*", sans-serif;
  font-weight: 300;
  background-color: #fff;
  text-align: center;

  &.active {
    border-bottom: 1px solid #000;
    font-weight: 700;
  }
  &:active, &:focus {
    outline: none;
  }
`;

const buttonsToRender = [
  {
    id: "get_width",
    label: "get width"
  },
  {
    id: "get_height",
    label: "get height"
  },
  {
    id: "get_aspect_ratio",
    label: "get aspect ratio"
  }
];

const ModeSelector = ({ handleModeUpdate, mode }) => {

  console.log({ mode });

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      my={4}
      mx="auto"
      width={[0, 0, 0, 600]}
    >
      {buttonsToRender.map((button) => (
        <Button
          className={mode === button.id ? "active" : ""}
          id={button.id}
          key={button.id}
          onClick={handleModeUpdate}
        >
          {button.label}
        </Button>
      ))}
    </Flex>
  );
};

export default ModeSelector;

{/* class ModeSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    handleModeUpdate: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(["get_width", "get_height", "get_aspect_ratio"]),
  };

  handleButtonClick = e => {
    this.props.handleModeUpdate(e.target.id);
  };

  render() {

    return (
      <div>
        <div className="button_group">
          {buttonsToRender.map(button => (
            <button
              className={this.props.mode === button.id ? "active" : ""}
              id={button.id}
              key={button.id}
              onClick={this.handleButtonClick}>
              {button.label}
            </button>
          ))}
        </div>

        <style jsx>{`
          .button_group {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 40px auto;
          }
          @media (min-width: 1200px) {
            .button_group {
              width: 600px;
            }
          }
          @media (min-width: 600px) and (max-width: 1199px) {
            .button_group {
              width: 70%;
            }
          }
          @media (max-width: 599px) {
            .button_group {
              width: 100%;
              flex-direction: column;
            }
          }

        `}</style>
      </div>
    );
  }
}
export default ModeSelector; */}
