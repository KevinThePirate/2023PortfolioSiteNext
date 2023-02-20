import React, { Component } from "react";
import "./Navbar-Style.css";
import { topics } from "..";

export default class PortfolioNavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          {topics.map((topic) => (
            <li>
              <button
                onClick={() => this.props.api.moveTo(3, topics.indexOf(topic))}>
                {topic}&nbsp;
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
