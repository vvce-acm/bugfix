import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main">
          <div className="bug slide-in-elliptic-top-fwd">
            <img src={require("./bug.gif")} alt="bug" />
            <h1 className="slide-in-blurred-bottom">BugFix</h1>
          </div>
          <div className="details slide-in-blurred-bottom">
            <h2>Squash bugs in code!</h2>
            <a href="https://forms.gle/nGuxmLWthdBdrhn7A">
              <button className="register">Register Now</button>
            </a>
          </div>
        </div>
        <div className="logos">
          <ul>
            <li>
              <img src={require("./vvceLogo.png")} alt="vvceLogo" />
            </li>
            <li>
              <img src={require("./acmLogo.png")} alt="acmLogo" />
            </li>
          </ul>
        </div>
        <p id="version">v1.6</p>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
