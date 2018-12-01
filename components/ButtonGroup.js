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
          label: "get width",
          active: this.props.mode == "get_width",
        },
        {
          id: "get_height",
          label: "get height",
          active: this.props.mode == "get_height",
        },
        {
          id: "get_aspect_ratio",
          label: "get aspect ratio",
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
            align-items: center;
            margin: 40px auto;
          }
          @media (min-width: 1200px) {
            .button_group {
              width: 500px;
            }
          }
          @media (min-width: 600px) and (max-width: 1199px) {
            .button_group {
              width: 70%;
            }
          }
          @media (max-width: 599px) {
            .button_group {
              width: 100%;
              flex-direction: column;
            }
          }
          button {
            display: block;
            width: 160px;
            margin: 0 20px;
            padding: 10px;
            height: auto;
            border: none;
            font-size: 20px;
            cursor: pointer;
            font-family: "Jost* 300", sans-serif;
            background-color: #fff;
          }
          @media (max-width: 599px) {
            button {
              margin: 10px 0;
            }
          }
          button.active {
            font-family: "Jost* 600 Semi", sans-serif;
            border-bottom: ${cssVars.borderRadius} solid #000;
          }
          button:hover,
          button:active,
          button.active {
            font-family: "Jost* 600 Semi", sans-serif;
          }
          button:focus,
          button:active {
            outline: none;
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
