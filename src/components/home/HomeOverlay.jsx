import React from "react";
import classes from "./HomeOverlay.module.css";
import { motion } from "framer-motion";

const HomeOverlay = () => {
  const section = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.85,
      },
    },
  };

  const heading = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    show: {
      transition: { type: "spring", damping: 50, stiffness: 120 },
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.section
      className={classes.home}
      variants={section}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className={classes.heading} variants={heading}>
        The eternity is our craft. <br />
        Glassify.
      </motion.h1>
      <motion.h1 className={classes.heading} variants={heading}>
        We keep your memories <br /> inside the glass.
      </motion.h1>
    </motion.section>
  );
};

export default HomeOverlay;
