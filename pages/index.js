/*
|--------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------
*/

import Head from "next/head";
import "../styles/global.css";
import ModeSelector from "../components/ModeSelector";
import UserInputForm from "../components/UserInputForm";
import {
  calculateWidth,
  calculateHeight,
  calculateAspectRatio,
} from "../services/helpers";

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    mode: "get_width",
    width: null,
    height: null,
    xRatio: null,
    yRatio: null,
    result: "",
  };

  // In future versions it should round some aspect ratios to the most used resolutions. See the following link for reference: https://stackoverflow.com/a/13466237/2577494

  calculate = mode => {
    switch (mode) {
      case "get_width":
        let width = calculateWidth({
          xRatio: this.state.xRatio,
          yRatio: this.state.yRatio,
          height: this.state.height,
        });
        this.setState({ result: width });
        break;

      case "get_height":
        let height = calculateHeight({
          xRatio: this.state.xRatio,
          yRatio: this.state.yRatio,
          width: this.state.width,
        });
        this.setState({ result: height });
        break;

      case "get_aspect_ratio":
        let { x, y } = calculateAspectRatio(
          this.state.width,
          this.state.height
        );
        this.setState({ result: x + ":" + y });
        break;

      default:
        null;
    }
  };

  // this callback is passed down to the child's components so they can update
  // the Main comopnent's state
  updateUserInputs = (key, value) => {
    this.setState({ [key]: value });
  };

  updateMode = mode => {
    this.setState({
      mode: mode,
      result: "",
    });
  };

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

        <ModeSelector
          handleModeUpdate={this.updateMode}
          mode={this.state.mode}
        />

        <div className="form_container">
          <UserInputForm
            mode={this.state.mode}
            updateGlobalUserInputs={this.updateUserInputs}
          />
          <button
            className="calculate"
            onClick={e => this.calculate(this.state.mode)}>
            calculate
          </button>
        </div>

        <div className="result_area">
          <h3>Result</h3>
          <p>{this.state.result}</p>
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
