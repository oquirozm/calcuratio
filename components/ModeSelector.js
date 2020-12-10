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
  font-size: 18px;
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
          onClick={() => handleModeUpdate(button.id)}
        >
          {button.label}
        </Button>
      ))}
    </Flex>
  );
};

export default ModeSelector;
