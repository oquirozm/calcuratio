import { Component, forwardRef } from "react";
import propTypes from "prop-types";
// i decided to import the css because fitting the
import "../styles/InputForm.css";
import { createRef } from "react";

// props
// name
// onChangeHandler
// Ref
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

    // creating refs
    // we need refs in order to clean all the inputs every time we change update the form depending on the mode of the app

    this.widthInput = createRef();
    this.heightInput = createRef();
    this.xInput = createRef();
    this.yInput = createRef();

    this.inputRefs = [
      this.widthInput,
      this.heightInput,
      this.xInput,
      this.yInput,
    ];
  }

  handleInputChange(e) {
    this.props.updateValueHandler(
      e.target.getAttribute("name"),
      e.target.value
    );
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.mode !== nextProps.mode) {
      console.log(this.inputRefs);

      this.inputRefs
        .filter(ref => ref.current)
        .forEach(ref => (ref.current.value = ""));
    }
    return true;
  }

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

InputForm.propTypes = {
  mode: propTypes.oneOf(["get_width", "get_height", "get_aspect_ratio"]),
  updateValueHandler: propTypes.func.isRequired,
};

// export default InputForm;
export default InputForm;
