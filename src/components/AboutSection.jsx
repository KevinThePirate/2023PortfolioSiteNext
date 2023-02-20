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
                href="https://drive.google.com/file/d/1R5B3dNofDEHf_mhv2y4GVYW4GwmNdIRx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-file-pdf-o"></i>
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
              I'm an award winning comic writer and designer working in the
              International industry for the past 6 years, including work as a
              story editor and magazine head for MyFutprint Entertainment, the
              largest diversity-based comic publisher. I also have experience in
              corporate design for DePuy Synthes and J&J, freelance web
              development, and over 10 years of teaching experience for various
              different schools and organizations.
            </p>
          </div>
        </div>
        <div id="two-two">
          <div id="work-area">
            <h2 id="job-title">Where I’ve Worked</h2>
            <JobTabs />
          </div>
          <div id="button-area">
            <button onClick={() => this.props.api.moveTo(3)}>
              View Portfolio Cards
            </button>
          </div>
        </div>
      </>
    );
  }
}
