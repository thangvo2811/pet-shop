import React, { Fragment } from "react";
import "../sass/Contact.scss";
import img1 from "../images/dogCat.svg";
import img2 from "../images/Circle.svg";
import img3 from "../images/Circle2.svg";
const Contact = () => {
  return (
    <Fragment>
      <div className="contact">
        <div className="contact__left">
          <h3 className="contact__left__title">Booking Day</h3>
          <form action="" className="contact__left__form" autocomplete="off">
            <input type="text" placeholder="Enter your name" />
            <input type="number" placeholder="Your phone number" />
            <input type="Email" placeholder="Enter your email" />
          </form>
          <div className="contact__left__btn">
            <button className="contact__left__btn__apl">Apply</button>
            <button className="contact__left__btn__ref">Refresh</button>
          </div>
        </div>
        <div className="contact__right">
          <img src={img3} alt="" className="contact__right__circle" />
          <img src={img2} alt="" className="contact__right__circle1" />
          <img src={img1} alt="" className="contact__right__dogC" />
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
