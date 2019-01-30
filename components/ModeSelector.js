// props: handleModeChange is a method passed from above that allows the component to change the mode of the app
import PropTypes from "prop-types";

/*
|--------------------------------------------------------------------------
| Other variables
|--------------------------------------------------------------------------
*/

let cssVars = {
  borderRadius: "1px",
  backgroundColor: "#938eed",
  hoverBackgroundColor: "#6979ba",
};

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

class ModeSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    handleModeUpdate: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(["get_width", "get_height", "get_aspect_ratio"]),
  };

  handleButtonClick = e => {
    this.props.handleModeUpdate(e.target.id);
  };

  render() {
    let buttonsToRender = [
      {
        id: "get_width",
        label: "get width",
      },
      {
        id: "get_height",
        label: "get height",
      },
      {
        id: "get_aspect_ratio",
        label: "get aspect ratio",
      },
    ];

    return (
      <div>
        <div className="button_group">
          {buttonsToRender.map(button => (
            <button
              className={this.props.mode === button.id ? "active" : ""}
              id={button.id}
              key={button.id}
              onClick={this.handleButtonClick}>
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
              width: 600px;
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
export default ModeSelector;
