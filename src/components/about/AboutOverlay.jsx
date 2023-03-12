import React from "react";
import classes from "./AboutOverlay.module.css";

const AboutOverlay = () => {
  return (
    <section className={classes.about}>
      <div className={classes.quote}>
        <h2 className={classes.heading}>About.</h2>
        <p className={classes.text}>
          We are the small company of crafters, who specializes in creating
          glass made items.
          <br /> We love our craft and always try our best to bring positive
          experience to our customers.
        </p>
      </div>

      <div className={classes.quote} style={{ marginLeft: "auto" }}>
        <h2 className={classes.heading}>
          Well designed <br />& crafted.
        </h2>
        <p className={classes.text}>
          From designing to creating on each step we will be in touch with you.
          <br />
          To make sure that your eternal memories will last forever we use
          high-quality and durable materials.
        </p>
      </div>
    </section>
  );
};

export default AboutOverlay;
