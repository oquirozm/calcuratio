import ButtonGroup from "../components/ButtonGroup";
import InputForm from "../components/InputForm";
import helpers from "../helpers";
const { toFixed } = helpers;

const adjustDecimals = ratio => {
  for (let index = 2; index < 500; index++) {
    let maybeX = ratio * index;
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
          // I'm using toFixed hleper which truncs a float to 2 decimals without rounding
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
        <div className="title_area">
          <h1>Aspect Ratio Calculator</h1>
        </div>
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
            Calculate
          </button>
        </div>
        <div className="result_area">
          <h3>Result</h3>
          <p>{this.state.calculation}</p>
        </div>
        <style jsx>{`
          .title_area h1 {
            text-align: center;
          }
          .form_container {
            display: flex;
            flex-direction: column;
            margin: 20px;
          }
          .calculate {
            width: 200px;
            height: 40px;
            margin: 0 auto;
          }
          .result_area {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .result_area h3 {
            font-size: 30px;
            font-family: sans-serif;
            text-transform: uppercase;
            margin-bottom: 0;
          }
          .result_area p {
            font-family: sans-serif;
            font-size: 25px;
          }
        `}</style>
      </div>
    );
  }
}

export default Main;
