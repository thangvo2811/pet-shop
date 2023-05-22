import React, { Fragment } from "react";
import "../sass/Service.scss";
import img1 from "../images/service.svg";
import img2 from "../images/service1.svg";
import img3 from "../images/service2.svg";
import img4 from "../images/service3.svg";

const Service = () => {
  return (
    <Fragment>
      <div className="service">
        <div className="service__left">
          <div className="service__left__card">
            <img src={img1} alt="" className="service__left__card__dog" />
            <img src={img2} alt="" className="service__left__card__eat" />
          </div>
          <div className="service__left__abc">
            <img src={img3} alt="" className="service__left__abc__img" />
          </div>
          <div className="service__left__xyz">
            <img src={img4} alt="" className="service__left__xyz__img" />
          </div>
        </div>
        <div className="service__right">
          <h3 className="service__right__title">Species</h3>
          <div className="service__right__content">
            Each dog has a different breed and characteristics, so their
            lifestyle, nutrition and even entertainment are different, please
            bring your pet to our store for advice. by experts
          </div>
          <button className="service__right__btn">
            Booking Day For Your Pet Now
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Service;
