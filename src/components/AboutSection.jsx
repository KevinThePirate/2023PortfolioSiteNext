import React, { Component } from "react";
//import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import pfp from "../images/pfp.jpg";
import JobTabs from "./JobTabs";
export default class AboutSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div id="two-one">
          <div id="basic-info-area">
            <img src={pfp} className="logo" />
            <h1>Kevin M. Smith</h1>
            <div id="logo-area">
              <a
                href="https://docs.google.com/document/d/1pSz025Dbg9nRkg4lA8aCohJGRCFdSW1M/edit?usp=sharing&ouid=100974966973156821027&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-regular fa-file"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kevinsmith1999/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-linkedin-square"></i>
              </a>
              -
              <a
                href="mailto:smithkevin1100@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-envelope"></i>
              </a>
              -
              <a
                href="https://github.com/KevinThePirate/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLLoswPRUC2mkPEDcwqFgSSgDWa8mrHFyw"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
            <p>
              A first-class honours graduate with experience designing, solving
              problems, and self-motivated learning. Years of experience in web
              development and design for both small and large businesses. As a
              result, familiar with a wide range of technologies and methods.
              Willing and eager to take on a role that affords the opportunity
              to use my demonstrated passion for growth, design, and
              problem-solving.
            </p>
          </div>
        </div>
        <div id="two-two">
          <div id="work-area">
            <h2 id="job-title">Where I’ve Worked</h2>
            <JobTabs api={this.props.api} />
          </div>
          <div id="button-area">
            <button onClick={() => this.props.api.moveTo(3)}>
              View Portfolio
            </button>
          </div>
        </div>
      </>
    );
  }
}
