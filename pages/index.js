import React, { useState } from "react";
import Head from "next/head";
import "../styles/global.css";
import ModeSelector from "../components/ModeSelector";
import UserInputForm from "../components/UserInputForm";
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
    switch (mode) {
      case "get_width":
        const width = calculateWidth({
          xRatio: ratios.x,
          yRatio: ratios.y,
          height: dimensions.height,
        });
        setResult(width);
        break;

      case "get_height":
        const height = calculateHeight({
          xRatio: ratios.x,
          yRatio: ratios.y,
          width: dimensions.width,
        });
        setResult(height);
        break;

      case "get_aspect_ratio":
        let { x, y } = calculateAspectRatio(
          dimensions.width,
          dimensions.height,
        );
        setResult(`${x}:${y}`);
        break;

      default:
        break;
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

        <header id="header">
          <h1 className="title">calcuratio</h1>
          <p className="made-by">
            made with ♡ by <a>omar</a>
          </p>
        </header>

        <ModeSelector
          handleModeUpdate={updateMode}
          mode={mode}
        />

        <div className="form_container">
          <UserInputForm
            mode={mode}
            updateGlobalUserInputs={updateUserInputs}
          />
          <button
            className="calculate"
            onClick={(e) => calculate(mode)}
          >
            calculate
          </button>
        </div>

        <div className="result_area">
          <h3>Result</h3>
          <p>{result}</p>
        </div>

        <style jsx>{`
          #header {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            margin-bottom: 50px;
          }
          @media (max-width: 599px) {
            #header {
              margin-bottom: 10px;
            }
          }
          #header h1 {
            font-family: "Jost* 400 Book", sans-serif;
            font-size: 18px;
            letter-spacing: 0.5px;
            border-bottom: 2px solid black;
          }
          #header .made-by {
            font-family: "Jost* 600 Semi", sans-serif;
            font-size: 15px;
            letter-spacing: 0.5px;
          }
          .title_area h1 {
            text-align: center;
          }
          .form_container {
            display: flex;
            flex-direction: column;
            margin: 20px;
          }
          .calculate {
            width: 180px;
            height: 40px;
            margin: 20px auto 0;
            background-color: #c63e4e;
            color: #fff;
            font-family: "Jost* 300", sans-serif;
            border-radius: 100px;
            border: none;
            font-size: 20px;
          }
          .calculate:hover {
            background-color: #b53544;
            cursor: pointer;
            transform: translateY(-1px);
          }
          .calculate:disabled {
            background-color: #c76f7a;
          }
          .result_area {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .result_area h3 {
            font-size: 30px;
            font-family: "Jost* 600 Semi", sans-serif;
            margin-bottom: 0;
            text-transform: lowercase;
          }
          .result_area p {
            font-family: "Jost* 600 Semi", sans-serif;
            font-size: 45px;
            min-height: 50px;
          }
        `}</style>
      </div>
    );
};

export default Main;
