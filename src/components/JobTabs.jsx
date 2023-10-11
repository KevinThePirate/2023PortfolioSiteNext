import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { allIngredients as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

export default function App(props) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 800px)");
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const increment = () => {
    const newTab = tabs[(tabs.indexOf(selectedTab) + 1) % tabs.length];
    setSelectedTab(newTab);
    const el = document.querySelector(".selected");
    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
      alignToTop: false,
    });
  };
  const decrement = () => {
    if (tabs.indexOf(selectedTab) === 0) {
      setSelectedTab(tabs[tabs.length - 1]);
      return;
    } else {
      setSelectedTab(tabs[(tabs.indexOf(selectedTab) - 1) % tabs.length]);
    }
    const el = document.querySelector(".selected");
    el.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
      alignToTop: false,
    });
  };
  return (
    <div
      className="window"
      id="job-tabs"
      onTouchStart={() => props.api.setAllowScrolling(false)}
      onTouchEnd={() => props.api.setAllowScrolling(true)}>
      <nav>
        {isSmallDevice && (
          <a className="job-tabs-button" onClick={() => decrement()}>
            &#60;
          </a>
        )}

        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}>
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
        {isSmallDevice && (
          <a className="job-tabs-button" onClick={() => increment()}>
            &#62;
          </a>
        )}
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}>
            {selectedTab ? (
              <div>
                <h4>{selectedTab.label}</h4>
                <p>
                  <b>{selectedTab.timeline}</b>
                </p>
                <p className="job-description">{selectedTab.desc}</p>
              </div>
            ) : (
              "😋"
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
