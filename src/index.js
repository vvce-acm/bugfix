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
    AOS.init({
      delay: 100,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="bug slide-in-elliptic-left-fwd">
          <img
            src={`${process.env.PUBLIC_URL}/images/better-bug.gif`}
            alt="bug"
          ></img>
          <h1>BugFix</h1>
        </div>
        <div className="details slide-in-bck-right">
          <div className="desc">
            <p data-aos="fade-up">BugFix is the first of it's kind contest.</p>
            <p data-aos="fade-up">
              You don't need to write code from scratch, it's already hosted for
              you.
            </p>
            <p data-aos="fade-up">
              Just find the bugs in the code, squash them with your bug-free
              code, and make the program bug free!
            </p>
            <p data-aos="fade-up">
              The language used for this event is C because, right now, it's the
              most prominent language in engineering students.
            </p>
            <p data-aos="fade-down">
              Participation e-certificate will be provided for all participants.
              Winners will be facilitated.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="event-details">
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
          <p data-aos="zoom-in-up" className="no-margin">
            The event was successful and we have 3 winners! Vaibhav DS, Arihant
            Chawla and Uvais Mon.
          </p>
        </div>
        <div className="logos">
          <p>Powered By</p>
          <a href="https://www.vvce.ac.in">
            <img
              src={`${process.env.PUBLIC_URL}/images/vvceLogo.png`}
              alt="vvce"
            ></img>
          </a>
          <a href="https://www.vvce.acm.org">
            <img
              src={`${process.env.PUBLIC_URL}/images/acmLogo.png`}
              alt="acm"
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
