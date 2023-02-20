import React, { Component } from "react";
//import "fullpage.js/vendors/scrolloverflow";
import qrCode from "../images/qrCode.png";

export default class FooterSection extends Component {
  render() {
    return (
      <div>
        <div id="footer-card">
          <img src={qrCode} id="qr-code" />
          <div id="link-area">
            <div>
              <h2>Get In Contact!</h2>
              <a href="#">Email</a>
              <a href="#">LinkedIn</a>
            </div>
            <div>
              <h2>More Links</h2>
              <a href="#">Comic Store</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
