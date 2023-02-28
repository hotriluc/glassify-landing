import React from "react";
import classes from "./AboutOverlay.module.css";

const AboutOverlay = () => {
  return (
    <section className={classes.about}>
      <div className={classes.quote}>
        <h2 className={classes.heading}>About.</h2>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
          repudiandae fugiat, et ab, voluptatum amet consectetur sunt enim ad
          ut, rem omnis reiciendis cumque necessitatibus soluta iusto aliquam
          beatae voluptate!
        </p>
      </div>

      <div className={classes.quote} style={{ marginLeft: "auto" }}>
        <h2 className={classes.heading}>
          Well designed <br />& crafted.
        </h2>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
          repudiandae fugiat, et ab, voluptatum amet consectetur sunt enim ad
          ut, rem omnis reiciendis cumque necessitatibus soluta iusto aliquam
          beatae voluptate!
        </p>
      </div>
    </section>
  );
};

export default AboutOverlay;
