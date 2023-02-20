import React, { Component, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import projData from "../data.json";

const variants = {
  closed: { marginTop: 0 },
  open: { marginTop: "-20%" },
};

function Content({ active, disabled, imgSrc }) {
  return (
    <motion.img
      className="title"
      layoutId="title"
      animate={active ? "open" : "closed"}
      variants={variants}
      style={{
        transition: "0.5s",
        transitionTimingFunction: "ease-out",
        opacity: disabled ? 0.2 : 1,
      }}
      src={imgSrc}
    />
  );
}
const MotionContent = motion(Content);
function ExpandedCard({ children, onCollapse, dataActive }) {
  return (
    <>
      <motion.div
        style={{
          "--lefto": dataActive,
        }}
        className="card expanded"
        layoutId="expandable-card"
        onClick={onCollapse}>
        {children}
      </motion.div>
      {/*    <motion.p
        className="card expanded secondary"
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: "6rem" }}
        animate={{ opacity: 1, top: "3rem" }}>
        Today is clear
  </motion.p> */}
    </>
  );
}

function CompactCard({ children, onExpand, disabled }) {
  return (
    <motion.div
      className="card compact"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}>
      {children}
    </motion.div>
  );
}

function DateButton({
  day,
  onCollapse,
  onExpand,
  disabled,
  imgSrc,
  proj,
  active,
  dataActive,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <div className="card-container">
      <AnimateSharedLayout type="crossfade">
        {isExpanded ? (
          <ExpandedCard
            onCollapse={collapseDate}
            day={day}
            dataActive={dataActive}>
            <motion.div
              className="image-container"
              initial={{ height: "100%" }}
              animate={{ height: "50%" }}
              transition={{ duration: 1 }}>
              <MotionContent
                day={day}
                disabled={disabled}
                imgSrc={imgSrc}
                active={active}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="proj-info">
              <h2>{proj.title}</h2>
              <p>{proj.desc}</p>
              <a href={proj.view}>View</a> / <a href={proj.github}>Github</a>
            </motion.div>
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
            <Content
              day={day}
              disabled={disabled}
              active={isExpanded}
              imgSrc={imgSrc}
            />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default function PortfolioSection(props) {
  const [expandedDay, setCollapsedDay] = useState();
  const projects = projData[props.activePort].projects;
  return (
    <div className="container">
      <div className="dates">
        {projects.map((proj) => (
          <DateButton
            dataActive={props.activePort}
            key={proj.key}
            imgSrc={proj.imgSrc}
            proj={proj}
            active={expandedDay == proj.key && expandedDay !== undefined}
            disabled={expandedDay !== proj.key && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(proj.key)}
            onCollapse={() => setCollapsedDay()}
            style={{ background: "green" }}
          />
        ))}
      </div>
    </div>
  );
}
