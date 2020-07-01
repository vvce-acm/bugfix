import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      bug: "/images/bug.gif",
    };
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
            <div className="logos">
              <ul>
                <li>
                  <a
                    href="https://vvce.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/2.png`}
                      alt="vvceLogo"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://vvce.acm.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/1.png`}
                      alt="acmLogo"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
