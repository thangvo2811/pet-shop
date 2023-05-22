import React, { Fragment } from "react";
import img1 from "../../images/image1.svg";
import img2 from "../../images/image2.svg";
import img3 from "../../images/image3.svg";
import img4 from "../../images/image4.svg";
import DiscoveryCard from "./DiscoveryCard";
import "../../sass/DiscoveryList.scss";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

const DiscoveryList = () => {
  const fakeApi = [
    {
      id: 1,
      name: "CHIHUAHUA DOG",
      country: "Mexico",
      img: img1,
    },
    {
      id: 2,
      name: "DACHSHUND DOG",
      country: "Germany",
      img: img2,
    },

    {
      id: 3,
      name: "POODLE DOG",
      country: "West India",
      img: img3,
    },
    {
      id: 4,
      name: "PUG DOG",
      country: "Mexico",
      img: img4,
    },
  ];
  return (
    <Fragment>
      <div className="list">
        <div className="list__icon">
          <RiArrowLeftSLine className="list__icon__style" />
        </div>
        {fakeApi.length > 0 &&
          fakeApi.map((item, index) => (
            <DiscoveryCard item={item} key={item.id}></DiscoveryCard>
          ))}
        <div className="list__icon">
          <RiArrowRightSLine className="list__icon__style" />
        </div>
      </div>
    </Fragment>
  );
};

export default DiscoveryList;
