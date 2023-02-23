import React from "react";
import ReactDOM from "react-dom/client";
//import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import Data from "./data.json";
import "./styles.css";
import TitleSection from "./components/TitleSection-1";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import FooterSection from "./components/FooterSection";
import PortfolioNavBar from "./components/PortfolioNavBar";
import { motion, AnimateSharedLayout } from "framer-motion";

import { useState } from "react";

export let topics = [];
for (let i = 0; i < Data.length; i++) {
  topics.push(Data[i].title);
}
console.log({ topics });

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

let testVar = 0;

class FullpageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.buttonGen = this.buttonGen.bind(this);
  }
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  buttonGen(api) {
    let table = [];
    for (let i = 0; i < topics.length; i++) {
      table.push(
        <motion.button
          className="portfolio-cards"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.25, duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1, delay: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          onClick={() => {
            console.log("test");
            api.moveTo(4);
            api.moveTo(4, i);
            console.log(api.getActiveSection().slides);
            //this.api.moveSlideRight();
          }}></motion.button>
      );
    }
    console.log({ table });
    /*table = table.map((topic) => (
      <button onClick={() => fullpageApi.moveTo(1, 0)}> {topic} </button>
    ));*/
    return table;
  }

  portGen() {
    let table = [];
    for (let i = 0; i < topics.length; i++) {
      table.push(
        <div className="slide">
          <PortfolioSection
            id="portfolio-sect"
            activePort={i}
            key={"port-" + i}
          />
        </div>
      );
    }
    console.log({ table });
    /*table = table.map((topic) => (
      <button onClick={() => fullpageApi.moveTo(1, 0)}> {topic} </button>
    ));*/
    return table;
  }
  render() {
    return (
      <ReactFullpage
        sectionsColor={["#516091", "#81B1D5", "#A0D2E7", "#26408B"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          this.api = fullpageApi;
          return (
            <div id="fullpage">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              />
              <div className="section section1">
                <TitleSection />
              </div>
              <div className="section" id="section-2">
                <AboutSection api={this.api} buttonGen={this.buttonGen} />
              </div>
              <div className="section" id="section-4">
                {this.buttonGen(fullpageApi)}
              </div>
              <div className="section" id="section-3">
                {this.portGen()}
              </div>
              <div className="section" id="section-5">
                <FooterSection api={this.api} />
              </div>
            </div>
          );
        }}
      />
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FullpageWrapper />);

export default FullpageWrapper;
