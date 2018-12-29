/*
|--------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------
*/

import Head from 'next/head';
import '../styles/global.css';
import ButtonGroup from '../components/ButtonGroup';
import InputForm from '../components/InputForm';
import { calculateAspectRatio } from '../services/helpers';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'get_width',
      calcValues: {
        width: null,
        height: null,
        x: null,
        y: null,
      },
      calculation: '',
    };
    this.handleModeChange = this.handleModeChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  // the function that actually calculates the output
  calculate() {
    switch (this.state.mode) {
      // Calculate width based on the passed values and update the state accordingly
      // w = (x*h)/y
      case 'get_width':
        this.setState(state => {
          let width = Math.round(
            (state.calcValues.x * state.calcValues.height) / state.calcValues.y
          );
          let newState = { calcValues: state.calcValues, calculation: width };
          newState.calcValues.width = width;
          return newState;
        });
        break;
      // Calculate height based on the passed values and update the state accordingly
      // h = (y*w)/x
      case 'get_height':
        this.setState(state => {
          let height = Math.round(
            (state.calcValues.y * state.calcValues.width) / state.calcValues.x
          );
          let newState = { calcValues: state.calcValues, calculation: height };
          newState.calcValues.height = height;
          return newState;
        });
        break;
      // Calculate the aspect ratio (with the helper function) based on the passed values and update hte state accordingly.
      case 'get_aspect_ratio':
        this.setState(state => {
          let aspectRatio = calculateAspectRatio(
            state.calcValues.width,
            state.calcValues.height
          );
          let x = aspectRatio.x;
          let y = aspectRatio.y;

          let newState = {
            calcValues: { x, y },
            calculation: x + ':' + y,
          };
          return newState;
        });
        break;
      default:
        null;
    }
  }

  // function to update just one value in the state
  updateValue(key, value) {
    this.setState(state => {
      let newState = { calcValues: state.calcValues };
      newState.calcValues[key] = parseInt(value);
      return newState;
    });
  }

  handleModeChange(mode) {
    this.setState({
      mode: mode,
      calculation: '',
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
            font-family: 'Jost* 400 Book', sans-serif;
            font-size: 18px;
            letter-spacing: 0.5px;
            border-bottom: 2px solid black;
          }
          #header .made-by {
            font-family: 'Jost* 600 Semi', sans-serif;
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
            font-family: 'Jost* 300', sans-serif;
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
            font-family: 'Jost* 600 Semi', sans-serif;
            margin-bottom: 0;
            text-transform: lowercase;
          }
          .result_area p {
            font-family: 'Jost* 600 Semi', sans-serif;
            font-size: 45px;
            min-height: 50px;
          }
        `}</style>
      </div>
    );
  }
}

export default Main;
