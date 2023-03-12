import React from "react";
import classes from "./ContactOverlay.module.css";

const ContactOverlay = () => {
  return (
    <section className={classes.contact}>
      <h2 className={classes.heading}>Contact</h2>

      <form action="" className={classes.form}>
        <input className={classes.input} type="text" placeholder="Name" />
        <input className={classes.input} type="text" placeholder="Email" />
        <textarea
          className={`${classes.input} ${classes["text-area"]}`}
          placeholder="Message"
        />
      </form>
    </section>
  );
};

export default ContactOverlay;
