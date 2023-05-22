import React, { Fragment } from "react";
import "../../sass/Banner.scss";
import dog from "../../images/image_dog.svg";
import dog1 from "../../images/image_dog1.svg";
import cat from "../../images/image_cat.svg";
import cat1 from "../../images/image_cat1.svg";

const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        <div className="banner__left">
          <p className="banner__left__text">
            Welcome to the website to book all your pet care and sales
          </p>
          <h1 className="banner__left__text1">CHOOSE THE BEST WAY FOR</h1>
          <h1 className="banner__left__text2">YOUR PET</h1>
          <button className="banner__left__btn">
            Book a day to take care of your pet now
          </button>
        </div>
        <div className="banner__right">
          <div className="banner__right__dog">
            <div className="banner__right__dog__bg">
              <img src={dog} alt="" className="banner__right__dog__bg__img" />
            </div>
            <div className="banner__right__dog__border"></div>
            <div className="banner__right__dog__info">
              <div className="banner__right__dog__info__content">
                <div className="banner__right__dog__info__content__left">
                  <p className="banner__right__dog__info__content__left__title">
                    Tiny
                  </p>
                  <div className="banner__right__dog__info__content__left__border1"></div>
                  <div className="banner__right__dog__info__content__left__border2"></div>
                  <span className="banner__right__dog__info__content__left__buy">
                    1k+
                  </span>
                  <span className="banner__right__dog__info__content__left__buy1">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.05398 1.06882C4.30041 0.310392 5.37339 0.310392 5.61982 1.06882L6.03824 2.3566C6.14845 2.69578 6.46452 2.92543 6.82116 2.92543H8.17521C8.97267 2.92543 9.30424 3.94589 8.65908 4.41463L7.56363 5.21052C7.27511 5.42014 7.15438 5.79171 7.26458 6.13089L7.68301 7.41867C7.92944 8.1771 7.06138 8.80779 6.41622 8.33905L5.32077 7.54316C5.03224 7.33353 4.64155 7.33353 4.35303 7.54316L3.25758 8.33905C2.61242 8.80779 1.74436 8.1771 1.99079 7.41867L2.40921 6.13089C2.51942 5.79171 2.39869 5.42014 2.11016 5.21052L1.01472 4.41463C0.369554 3.94589 0.701122 2.92543 1.49858 2.92543H2.85263C3.20927 2.92543 3.52535 2.69578 3.63555 2.3566L4.05398 1.06882Z"
                        fill="#410075"
                      />
                    </svg>
                  </span>
                </div>
                <div className="banner__right__dog__info__content__right">
                  <img src={dog1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner__right__cat">
            <div className="banner__right__cat__bg">
              <img src={cat} alt="" />
            </div>
            <div className="banner__right__cat__info">
              <div className="banner__right__cat__info__content">
                <div className="banner__right__cat__info__content__left">
                  <p className="banner__right__cat__info__content__left__title">
                    Mark
                  </p>
                  <div className="banner__right__cat__info__content__left__border1"></div>
                  <div className="banner__right__cat__info__content__left__border2"></div>
                  <span className="banner__right__cat__info__content__left__buy">
                    1k+
                  </span>
                  <span className="banner__right__cat__info__content__left__buy1">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.05398 1.06882C4.30041 0.310392 5.37339 0.310392 5.61982 1.06882L6.03824 2.3566C6.14845 2.69578 6.46452 2.92543 6.82116 2.92543H8.17521C8.97267 2.92543 9.30424 3.94589 8.65908 4.41463L7.56363 5.21052C7.27511 5.42014 7.15438 5.79171 7.26458 6.13089L7.68301 7.41867C7.92944 8.1771 7.06138 8.80779 6.41622 8.33905L5.32077 7.54316C5.03224 7.33353 4.64155 7.33353 4.35303 7.54316L3.25758 8.33905C2.61242 8.80779 1.74436 8.1771 1.99079 7.41867L2.40921 6.13089C2.51942 5.79171 2.39869 5.42014 2.11016 5.21052L1.01472 4.41463C0.369554 3.94589 0.701122 2.92543 1.49858 2.92543H2.85263C3.20927 2.92543 3.52535 2.69578 3.63555 2.3566L4.05398 1.06882Z"
                        fill="#410075"
                      />
                    </svg>
                  </span>
                </div>
                <div className="banner__right__cat__info__content__right">
                  <img src={cat1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
