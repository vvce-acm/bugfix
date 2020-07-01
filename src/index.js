import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Logos from "./Logos";

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="main">
          <div className="bug slide-in-elliptic-top-fwd">
            <img
              src={`${process.env.PUBLIC_URL}/images/bug.gif`}
              alt="bugImage"
            />
            <h1 className="slide-in-blurred-bottom">BugFix</h1>
          </div>
          <div className="details slide-in-blurred-bottom">
            <h2>Squash bugs in code!</h2>
            <a
              href="https://forms.gle/nGuxmLWthdBdrhn7A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="register">Register Now</button>
            </a>
            <Logos />
          </div>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
