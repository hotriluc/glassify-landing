import React from "react";
import classes from "./HomeOverlay.module.css";

const HomeOverlay = () => {
  return (
    <section className={classes.home}>
      <h1 className={classes.heading}>
        The eternity is our craft. <br />
        Glassify.
      </h1>
      <h1 className={classes.heading}>
        We keep your memories <br /> inside the glass.
      </h1>
    </section>
  );
};

export default HomeOverlay;
