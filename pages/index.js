import ButtonGroup from "../components/ButtonGroup";
import InputForm from "../components/InputForm";
import Head from "next/head";
import helpers from "../helpers";
import "../styles/global.css";

let brandStyleVariables = {
  gray: "#F0F0F0",
};

const { toFixed } = helpers;

const adjustDecimals = ratio => {
  for (let index = 2; index < 1000; index++) {
    let maybeX = ratio * index;
    console.log(maybeX);
    let decimals = toFixed(maybeX % 1, 2);
    if (decimals > 0.9 && decimals < 1) {
      return { x: Math.round(maybeX), y: index };
    }
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "get_width",
      values: {
        width: null,
        height: null,
        x: null,
        y: null,
      },
      calculation: "",
    };
    this.handleModeChange = this.handleModeChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  calculate() {
    switch (this.state.mode) {
      // get width
      // w = (x*h)/y
      // i need height, ratio x and y
      case "get_width":
        this.setState(state => {
          let width = (state.values.x * state.values.height) / state.values.y;
          let newState = { values: state.values, calculation: width };
          newState.values.width = width;
          return newState;
        });
        break;
      // get height
      // h = (y*w)/x
      // i need width, ratio x and y
      case "get_height":
        this.setState(state => {
          let height = (state.values.y * state.values.width) / state.values.x;
          let newState = { values: state.values, calculation: height };
          newState.values.height = height;
          return newState;
        });
        break;
      case "get_aspect_ratio":
        this.setState(state => {
          let height = state.values.height;
          let width = state.values.width;
          let x, y;
          // I'm using toFixed helper which truncs a float to 2 decimals without rounding
          let ratio = toFixed(width / height, 2);
          let aspectRatio = adjustDecimals(ratio);
          x = aspectRatio.x;
          y = aspectRatio.y;

          let newState = { values: state.values, calculation: x + ":" + y };
          newState.values.x = x;
          newState.values.y = y;
          return newState;
        });
        break;
      default:
        null;
    }
  }

  updateValue(key, value) {
    this.setState(state => {
      let newState = { values: state.values };
      newState.values[key] = parseInt(value);
      return newState;
    });
  }

  handleModeChange(mode) {
    this.setState({
      mode: mode,
      calculation: "",
    });
  }

  render() {
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
        <ButtonGroup
          handleModeChange={this.handleModeChange}
          mode={this.state.mode}
        />
        <div className="form_container">
          <InputForm
            mode={this.state.mode}
            updateValueHandler={this.updateValue}
          />
          <button className="calculate" onClick={this.calculate}>
            calculate
          </button>
        </div>
        <div className="result_area">
          <h3>Result</h3>
          <p>{this.state.calculation}</p>
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
  }
}

export default Main;
