/*
|--------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------
*/
import { Component, forwardRef, createRef } from "react";
import propTypes from "prop-types";
import "../styles/InputForm.css";

/*
|--------------------------------------------------------------------------
| Components
|--------------------------------------------------------------------------
*/

const GetWidthForm = props => {
  const updateStateWithUserInput = (key, value) => {
    // update the parent component's state
    props.onChangeHandler(key, value);
  };

  return (
    <div className="form_area">
      <div className="field-group">
        <label>height</label>
        <p>(in whatever measure unit, we’re talking proportions here)</p>
        <input
          type="text"
          name="height"
          onChange={e =>
            updateStateWithUserInput(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="aspect-radio-form-container">
        <label>your current aspect ratio</label>
        <p>(e.g. 4:3 or 16:9)</p>
        <div className="aspect-radio-group-group">
          <input
            type="text"
            name="xRatio"
            onChange={e =>
              updateStateWithUserInput(e.target.name, e.target.value)
            }
          />
          <span>:</span>
          <input
            type="text"
            name="yRatio"
            onChange={e =>
              updateStateWithUserInput(e.target.name, e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

const GetHeightForm = props => {
  const updateStateWithUserInput = (key, value) => {
    // update the parent component's state
    props.onChangeHandler(key, value);
  };

  return (
    <div className="form_area">
      <div className="field-group">
        <label>width</label>
        <p>(in whatever measure unit, we’re talking proportions here)</p>
        <input
          type="text"
          name="width"
          onChange={e =>
            updateStateWithUserInput(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="aspect-radio-form-container">
        <label>your current aspect ratio</label>
        <p>(e.g. 4:3 or 16:9)</p>
        <div className="aspect-radio-input-group">
          <input
            type="text"
            name="xRatio"
            onChange={e =>
              updateStateWithUserInput(e.target.name, e.target.value)
            }
          />
          <span>:</span>
          <input
            type="text"
            name="yRatio"
            onChange={e =>
              updateStateWithUserInput(e.target.name, e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

const GetAspectRatioForm = props => {
  const updateStateWithUserInput = (key, value) => {
    // update the parent component's state
    props.onChangeHandler(key, value);
  };

  return (
    <div className="form_area">
      <div className="field-group">
        <label>width</label>
        <p>(in whatever measure unit, we’re talking proportions here)</p>
        <input
          type="text"
          name="width"
          onChange={e =>
            updateStateWithUserInput(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="field-group">
        <label>height</label>
        <p>(in whatever measure unit, we’re talking proportions here)</p>
        <input
          type="text"
          name="height"
          onChange={e =>
            updateStateWithUserInput(e.target.name, e.target.value)
          }
        />
      </div>
    </div>
  );
};

class UserInputForm extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    mode: propTypes.oneOf(["get_width", "get_height", "get_aspect_ratio"]),
    updateGlobalUserInputs: propTypes.func.isRequired,
  };

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
