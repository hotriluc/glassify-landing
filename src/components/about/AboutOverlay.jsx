import React from "react";
import classes from "./AboutOverlay.module.css";
import { motion } from "framer-motion";

const AboutOverlay = () => {
  const quote = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.55,
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      transition: { type: "spring", damping: 50, stiffness: 90 },
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className={classes.about}>
      <motion.div
        className={classes.quote}
        variants={quote}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <motion.h2 className={classes.heading} variants={text}>
          About.
        </motion.h2>
        <motion.p className={classes.text} variants={text}>
          We are the small company of crafters, who specializes in creating
          glass made items.
          <br /> We love our craft and always try our best to bring positive
          experience to our customers.
        </motion.p>
      </motion.div>

      <motion.div
        className={classes.quote}
        style={{ marginLeft: "auto" }}
        variants={quote}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <motion.h2 className={classes.heading} variants={text}>
          Well designed <br />& crafted.
        </motion.h2>
        <motion.p className={classes.text} variants={text}>
          From designing to creating on each step we will be in touch with you.
          <br />
          To make sure that your eternal memories will last forever we use
          high-quality and durable materials.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutOverlay;
