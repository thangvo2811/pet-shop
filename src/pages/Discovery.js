import React, { Fragment } from "react";
import DiscoveryList from "../components/discovery/DiscoveryList";
import { BsCircle } from "react-icons/bs";

const Discovery = () => {
  return (
    <Fragment>
      <div className="container">
        <h2 className="title">Discovery</h2>
        <div className="discovery">
          <div className="discovery__item">Dogs</div>
          <div className="discovery__item">Cats</div>
          <div className="discovery__item">Hamsters</div>
          <div className="discovery__item">Birds</div>
        </div>
      </div>
      <DiscoveryList></DiscoveryList>
      <div className="icon">
        <BsCircle className="icon__style" />
        <BsCircle className="icon__style" />
        <BsCircle className="icon__style" />
        <BsCircle className="icon__style" />
        <BsCircle className="icon__style" />
      </div>
    </Fragment>
  );
};

export default Discovery;
