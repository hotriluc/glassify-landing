import React from "react";
import classes from "./ContactOverlay.module.css";

const ContactOverlay = () => {
  return (
    <section className={classes.contact} onSubmit={(e) => e.preventDefault()}>
      <h2 className={classes.heading}>Contact Form.</h2>

      <form action="" className={classes.form}>
        <input className={classes.input} type="text" placeholder="Name" />
        <input className={classes.input} type="text" placeholder="Email" />
        <textarea
          className={`${classes.input} ${classes["text-area"]}`}
          placeholder="Message"
        />
        <button>Send</button>
      </form>
      <p className={classes.copyright}>Designed and created by Luc Ho.</p>
    </section>
  );
};

export default ContactOverlay;
