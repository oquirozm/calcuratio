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

// because we want to use the same input elements for different modes while letting
// the InputForm component control their values, we use forwardRef
// so we can pass down the refs created inside the InputForm component to the input elements.
const WorkingInput = forwardRef((props, ref) => (
  <input
    name={props.name}
    onChange={props.onChangeHandler}
    ref={ref}
    type="text"
  />
));

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    // we need refs in order to clean all the inputs every time we update the form depending the app is in.
    this.widthInput = createRef();
    this.heightInput = createRef();
    this.xInput = createRef();
    this.yInput = createRef();

    // we store the just created refs in an array for easier manipulation later.
    this.inputRefs = [
      this.widthInput,
      this.heightInput,
      this.xInput,
      this.yInput,
    ];
  }

  static propTypes = {
    mode: propTypes.oneOf(["get_width", "get_height", "get_aspect_ratio"]),
    updateValueHandler: propTypes.func.isRequired,
  };

  // we basically pass the data from the input up to the Main component defined in index.js
  // so it can update the state of the whole app.
  handleInputChange(e) {
    this.props.updateValueHandler(
      e.target.getAttribute("name"),
      e.target.value
    );
  }

  // clear the input elements values when the mode of the app changes
  shouldComponentUpdate(nextProps) {
    if (this.props.mode !== nextProps.mode) {
      this.inputRefs
        .filter(ref => ref.current)
        .forEach(ref => (ref.current.value = ""));
    }
    return true;
  }

  // render different inputs depending on the mode. This could probably be better done with routing
  // and better organized components.
  render() {
    switch (this.props.mode) {
      case "get_width":
        return (
          <div className="form_area">
            <div className="field-group">
              <label>height</label>
              <p>(in whatever measure unit, we’re talking proportions here)</p>
              <WorkingInput
                name="height"
                onChangeHandler={this.handleInputChange}
                ref={this.heightInput}
              />
            </div>
            <div className="aspect_radio-container">
              <label>your current aspect ratio</label>
              <p>(e.g. 4:3 or 16:9)</p>
              <div className="aspect-radio-input-group">
                <WorkingInput
                  name="x"
                  onChangeHandler={this.handleInputChange}
                  ref={this.xInput}
                />
                <span>:</span>
                <WorkingInput
                  name="y"
                  onChangeHandler={this.handleInputChange}
                  ref={this.yInput}
                />
              </div>
            </div>
          </div>
        );
      case "get_height":
        return (
          <div className="form_area">
            <div className="field-group">
              <label>width</label>
              <p>(in whatever measure unit, we’re talking proportions here)</p>
              <WorkingInput
                name="width"
                onChangeHandler={this.handleInputChange}
                ref={this.widthInput}
              />
            </div>
            <div className="aspect_radio-container">
              <label>your current aspect ratio</label>
              <p>(e.g. 4:3 or 16:9)</p>
              <div className="aspect-radio-input-group">
                <WorkingInput
                  name="x"
                  onChangeHandler={this.handleInputChange}
                  ref={this.xInput}
                />
                <span>:</span>
                <WorkingInput
                  name="y"
                  onChangeHandler={this.handleInputChange}
                  ref={this.yInput}
                />
              </div>
            </div>
          </div>
        );
      case "get_aspect_ratio":
        return (
          <div className="form_area">
            <div className="field-group">
              <label>width</label>
              <p>(in whatever measure unit, we’re talking proportions here)</p>
              <WorkingInput
                name="width"
                onChangeHandler={this.handleInputChange}
                ref={this.widthInput}
              />
            </div>
            <div className="field-group">
              <label>height</label>
              <p>(in whatever measure unit, we’re talking proportions here)</p>
              <WorkingInput
                name="height"
                onChangeHandler={this.handleInputChange}
                ref={this.heightInput}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

export default InputForm;
