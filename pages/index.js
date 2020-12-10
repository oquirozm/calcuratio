import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import ModeSelector from "../components/ModeSelector";
import UserInputForm from "../components/UserInputForm";
import { Title, Text, Flex, Button } from "../components";
import {
  calculateWidth,
  calculateHeight,
  calculateAspectRatio,
} from "../services/helpers";

const Main = () => {
  const [mode, setMode] = useState("get_width");
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const [ratios, setRatios] = useState({ x: null, y: null })
  const [result, setResult] = useState("");

  const calculate = (mode) => {
    let resultString = "";

    if (mode === "get_width") {
      const width = calculateWidth({
        xRatio: ratios.x,
        yRatio: ratios.y,
        height: dimensions.height,
      });
      resultString = `${width}`;
    }

    if ( mode === "get_height") {
      const height = calculateHeight({
        xRatio: ratios.x,
        yRatio: ratios.y,
        width: dimensions.width,
      });
      resultString = `${height}`;
    }

    if ( mode === "get_aspect_ratio") {
      let { x, y } = calculateAspectRatio(dimensions.width, dimensions.height);
      resultString = `${x}:${y}`;
    }

    if (resultString) {
      setResult(resultString);
    }
  };

  const updateUserInputs = (key, value) => {
    switch (key) {
      case "xRatio":
        setRatios( prev => ({...prev, x: value}));
        break;
      case "yRatio":
        setRatios( prev => ({...prev, y: value}));
        break;
      case "width":
        setDimensions(prev => ({...prev, width: value}));
        break;
      case "height":
        setDimensions(prev => ({...prev, height: value}));
        break;
      default:
        break;
    }
  };

  const updateMode = (mode) => {
    setMode(mode);
    setResult("");
  };

    return (
      <div>
        <Head>
          <title>Calcuratio</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Flex type="header" justifyContent="space-between"
        p={4}
        mb={6}
        >
          <Title mb={[2, 0]}>calcuratio</Title>
          <Text type="p">
            made with ♡ by <a>omar</a>
          </Text>
        </Flex>

        <ModeSelector handleModeUpdate={updateMode} mode={mode} />

        <Flex flexDirection="column" m={4} alignItems="center">
          <UserInputForm
            mode={mode}
            updateGlobalUserInputs={updateUserInputs}
          />
          <Button className="calculate" mt={4} onClick={(e) => calculate(mode)}>
            calculate
          </Button>
        </Flex>

        <Flex flexDirection="column"
        justifyContent="center" alignItems="center">
          <Title type="h3" fontSize={30}>Result</Title>
          <Text type="p" fontSize={45}>{result}</Text>
        </Flex>
      </div>
    );
};

export default Main;
