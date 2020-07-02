import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    AOS.init({});
  }

  render() {
    return (
      <div className="container">
        <div className="bug">
          <img
            src={`${process.env.PUBLIC_URL}/images/better-bug.gif`}
            alt="bug"
          ></img>
          <h1>BugFix</h1>
        </div>
        <div className="details">
          <div className="desc">
            <p>BugFix is the first of it's kind contest.</p>
            <p>
              You don't need to write code from scratch, it's already hosted for
              you.
            </p>
            <p>
              Just find the bugs in the code, squash them with your bug-free
              code, and make the program bug free!
            </p>
          </div>
          <a href="https://forms.gle/nGuxmLWthdBdrhn7A">
            <button>Register Now</button>
          </a>
          <div className="event-details">
            <div>
              <label htmlFor="date">EVENT DATE</label>
              <p id="date" className="detail">
                11th of July
              </p>
            </div>
            <div>
              <label htmlFor="duration">EVENT DURATION</label>
              <p className="detail" id="duration">
                3 hours | 10am to 1pm
              </p>
            </div>
          </div>
          <div className="logos">
            <p>Powered By</p>
            <a href="https://www.vvce.ac.in">
              <img
                src={`${process.env.PUBLIC_URL}/images/vvceLogo.png`}
                alt="vvce"
              ></img>
            </a>
            <a href="https://www.vvce.ac.org">
              <img
                src={`${process.env.PUBLIC_URL}/images/acmLogo.png`}
                alt="acm"
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
