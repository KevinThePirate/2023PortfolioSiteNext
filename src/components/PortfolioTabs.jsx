import { useState, useRef } from "react";
import { jobData as tabs } from "./JobData";
import { motion, AnimatePresence } from "framer-motion";

export default function App(props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const elRef = useRef();

  return (
    <div className="portfolio-display" id="">
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
          {
            <motion.img
              key={selectedTab ? selectedTab.title : "empty"}
              src={selectedTab.imgSrc}
              layoutId="display-image"
              className="display-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            />
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
                <a
                  href={selectedTab.view}
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-github"></i>
                </a>
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
