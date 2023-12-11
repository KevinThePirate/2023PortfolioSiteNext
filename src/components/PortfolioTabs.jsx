import { useState, useRef } from "react";
import { jobData as tabs } from "./JobData";
import { motion, AnimatePresence } from "framer-motion";

export default function App(props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const elRef = useRef();

  return (
    <div
      className="portfolio-display"
      onTouchStart={() => props.api.setAllowScrolling(false)}
      onTouchEnd={() => props.api.setAllowScrolling(true)}>
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.title}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}>
              <img src={item.thumb} className="job-thumbnail" />
              <p>{item.title}</p>
              {item === selectedTab ? (
                <motion.div className="overline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <div className="display-image-container">
        <AnimatePresence exitBeforeEnter>
          {selectedTab.video ? (<iframe width="100%" height="100%" src={selectedTab.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>) : (<motion.img
            key={selectedTab ? selectedTab.title : "empty"}
            src={selectedTab.imgSrc}
            layoutId="display-image"
            className="display-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          />)

          }
        </AnimatePresence>
      </div>
      <motion.main
        animate={{ y: 0 }}
        exit={{ y: -10 }}
        transition={{ duration: 0.2 }}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="job-text-container"
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}>
            {selectedTab ? (
              <div>
                <h4>{selectedTab.title}</h4>
                <p className="job-description">{selectedTab.desc}</p>
                {selectedTab.view && (
                  <a
                    href={selectedTab.view}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-up-right-from-square"></i>
                  </a>
                )}
                {selectedTab.github && (
                  <a
                    href={selectedTab.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                )}
                {selectedTab.figma && (
                  <a
                    href={selectedTab.figma}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-figma"></i>
                  </a>
                )}
                {selectedTab.doc && (
                  <a
                    href={selectedTab.doc}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-solid fa-book"></i>
                  </a>
                )}
              </div>
            ) : (
              "😋"
            )}
          </motion.div>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}
