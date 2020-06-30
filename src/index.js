import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import bug from "./bug.svg";
import acmLogo from "./acmLogo.svg";
import vvceLogo from "./vvceLogo.svg";

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
            <img src={bug} alt="bug"></img>
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
              <img src={vvceLogo} alt="vvce"></img>
            </li>
            <li>
              <img src={acmLogo} alt="acm"></img>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
