import propTypes from "prop-types";
import "../styles/InputForm.css";
import { createRef } from "react";
// formulas

// get aspect ratio
// import the function developerd in the other project
// dedcutAspectRatio(w,h);
// just input width and height

class InputForm extends React.Component {
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
              <label>Height</label>
              <input
                name="height"
                type="text"
                onChange={this.handleInputChange}
                ref={this.heightInput}
              />
            </div>
            <div className="aspect_radio-container">
              <p>Type the two dimensions of your aspect ratio</p>
              <input
                name="x"
                type="text"
                ref={this.xInput}
                onChange={this.handleInputChange}
              />{" "}
              :
              <input
                name="y"
                type="text"
                ref={this.yInput}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        );
      case "get_height":
        return (
          <div className="form_area">
            <div className="field-group">
              <label>Width</label>
              <input
                name="width"
                type="text"
                onChange={this.handleInputChange}
                ref={this.widthInput}
              />
            </div>
            <div className="aspect_radio-container">
              <p>Type the two dimensions of your aspect ratio</p>
              <input
                name="x"
                type="text"
                ref={this.xInput}
                onChange={this.handleInputChange}
              />{" "}
              :
              <input
                name="y"
                type="text"
                ref={this.yInput}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        );
      case "get_aspect_ratio":
        return (
          <div className="form_area">
            <div className="field-group">
              <label>Width</label>
              <input
                name="width"
                type="text"
                onChange={this.handleInputChange}
                ref={this.widthInput}
              />
            </div>
            <div className="field-group">
              <label>Height</label>
              <input
                name="height"
                type="text"
                onChange={this.handleInputChange}
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
