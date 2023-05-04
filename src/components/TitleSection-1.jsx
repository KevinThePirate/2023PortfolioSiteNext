import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import img1 from "../images/Rectangle1.png";
import img2 from "../images/Rectangle2.png";
import img3 from "../images/Rectangle3.png";
import img4 from "../images/Rectangle4.png";
import img5 from "../images/Rectangle5.png";

const imageArr = [img1, img2, img3, img4, img5];
export default class TitleSection extends Component {
  constructor(props) {
    super(props);
    this.state = { imageLoaded: false, imagesLoaded: 0 };
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState((prevState) => {
      return { imagesLoaded: prevState.imagesLoaded + 1 };
    });
    console.log(this.state.imagesLoaded);
  }

  render() {
    return (
      <div>
        <motion.div
          id="image-grid"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ delay: 3, duration: 0.5 }}>
          {imageArr.map((image, index) => (
            <motion.img
              src={image}
              id={"grid-image-" + index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                this.state.imagesLoaded >= imageArr.length
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              viewport={{ once: true }}
              transition={{ delay: index * 0.5 + 0.5, duration: 0.3 }}
              onLoad={this.handleLoad}
            />
          ))}
        </motion.div>
        <motion.div
          id="title-area"
          initial={{ opacity: 0, y: 50 }}
          animate={
            this.state.imagesLoaded >= imageArr.length
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ delay: 3.25, duration: 0.5 }}>
          <h1>Kevin M. Smith</h1>
          <h4>Web Dev, Design and Video & Comic Production</h4>
        </motion.div>
      </div>
    );
  }
}
