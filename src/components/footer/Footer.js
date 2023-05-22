import React, { Fragment } from "react";
import "../../sass/Footer.scss";
import { ImGoogle } from "react-icons/im";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer__left">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Risus lobortis pharetra
            viverra massa tortor. Ipsum vivamus nulla eget sit cursus interdum
            posuere. Tincidunt viverra ultrices fringilla in pellentesque dui
            elit massa libero. Purus sit facilisi eget faucibus. Ullamcorper
            feugiat
          </p>
        </div>
        <div className="footer__right">
          <div className="footer__right__icons">
            <ImGoogle className="footer__right__icons__style" />
            <ImFacebook className="footer__right__icons__style" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Risus lobortis pharetra</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
