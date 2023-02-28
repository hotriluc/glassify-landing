import React from "react";
import classes from "./HomeOverlay.module.css";

const HomeOverlay = () => {
  return (
    <section className={classes.home}>
      <h1 className={classes.heading}>
        The eternity is our craft. <br />
        Glassify.
      </h1>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
        repudiandae fugiat, et ab, voluptatum amet consectetur sunt enim ad ut,
        rem omnis reiciendis cumque necessitatibus soluta iusto aliquam beatae
        voluptate!
      </p>
    </section>
  );
};

export default HomeOverlay;
