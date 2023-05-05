import { useState } from "react";
import { allIngredients as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

export default function App(props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div
      className="window"
      id="job-tabs"
      onTouchStart={() => props.api.setAllowScrolling(false)}
      onTouchEnd={() => props.api.setAllowScrolling(true)}>
      <nav>
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
