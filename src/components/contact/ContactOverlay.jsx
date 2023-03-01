import React from "react";
import classes from "./ContactOverlay.module.css";

const ContactOverlay = () => {
  return (
    <section className={classes.contact}>
      <h2 className={classes.heading}>Contact</h2>

      <form action="" className={classes.form}>
        <input className={classes.input} type="text" placeholder="Your name" />
        <input className={classes.input} type="text" placeholder="Your email" />
        <textarea
          className={`${classes.input} ${classes["text-area"]}`}
          contenteditable="true"
          placeholder="Your message"
        />
      </form>
    </section>
  );
};

export default ContactOverlay;
