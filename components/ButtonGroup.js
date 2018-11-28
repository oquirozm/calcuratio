// props: handleModeChange is a method passed from above that allows the component to change the mode of the app
import PropTypes from "prop-types";

let cssVars = {};
cssVars.borderRadius = "1px";
cssVars.backgroundColor = "#938eed";
cssVars.hoverBackgroundColor = "#6979ba";

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    // this is the data to render the actual buttons
    this.state = {
      buttons: [
        {
          id: "get_width",
          label: "Calculate Width",
          active: this.props.mode == "get_width",
        },
        {
          id: "get_height",
          label: "Calculate Height",
          active: this.props.mode == "get_height",
        },
        {
          id: "get_aspect_ratio",
          label: "Calculate Aspect Ratio",
          active: this.props.mode == "get_aspect_ratio",
        },
      ],
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleModeChange = this.props.handleModeChange.bind(this);
  }

  // changes the mode (didnt had time to learn context api), updates the active property of the buttons
  handleButtonClick(e) {
    let targetId = e.target.id;
    // hanldeModeChange is a callback passed via prop
    this.handleModeChange(targetId);
    this.setState(state => {
      return {
        buttons: state.buttons.map(button => {
          if (button.id == targetId) {
            button.active = !button.active;
          } else {
            button.active = false;
          }
          return button;
        }),
      };
    });
  }

  render() {
    return (
      <div>
        <div className="button_group">
          {this.state.buttons.map(button => (
            <button
              className={button.active ? "active" : ""}
              id={button.id}
              key={button.id}
              onClick={this.handleButtonClick}
            >
              {button.label}
            </button>
          ))}
        </div>

        <style jsx>{`
          .button_group {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
          }
          button {
            display: block;
            width: 200px;
            height: auto;
            border: none;
            font-size: 20px;
            background-color: ${cssVars.backgroundColor};
            border-right: ${cssVars.borderRadius} solid #000;
            border-top: ${cssVars.borderRadius} solid #000;
            border-bottom: ${cssVars.borderRadius} solid #000;
            cursor: pointer;
          }
          button.active {
            background-color: ${cssVars.hoverBackgroundColor};
          }
          button:hover,
          button:active {
            background-color: ${cssVars.hoverBackgroundColor};
          }
          button:focus,
          button:active {
            outline: none;
          }
          button:first-of-type {
            border-left: ${cssVars.borderRadius} solid #000;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
          }
          button:last-of-type {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          }
        `}</style>
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  handleModeChange: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["get_width", "get_height", "get_aspect_ratio"]),
};

export default ButtonGroup;
