import React, { Fragment } from "react";
import "../sass/About.scss";
import dog from "../images/about.svg";
import bg from "../images/Rectangle 6.svg";
import circle from "../images/Group5.svg";
const About = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="about__left">
          <h3>Our Company</h3>
          <p>About us</p>
          <div>
            With 10 years of experience in the field of pet care and a team of
            experienced veterinarians, we are confident we can protect your pets
            from diseases they will get in the future. their nutrition and daily
            food intake.
          </div>
          <div>
            Loving and pampering your pet is not enough, it must also go hand in
            hand with their health and our service is where you can give your
            full trust.
          </div>
          <p>About consulting</p>
          <div>
            Each pet species has a different habitat and behavior, so meet and
            consult directly with an animal specialist.
          </div>
          <p>Our Service</p>
          <ul>
            <li>Spa</li>
            <li>Physical checkup your pet</li>
            <li>Nutrition advice for pets</li>
          </ul>
        </div>
        <div className="about__right">
          <div className="about__right__content">
            <div className="about__right__content__card">
              <img
                src={circle}
                alt=""
                className="about__right__content__card__circle"
              />
              <img
                src={bg}
                alt=""
                className="about__right__content__card__bg"
              />
              <img
                src={dog}
                alt=""
                className="about__right__content__card__dog"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
