import React from "react";
import "./style.css";
import { BiSolidCategoryAlt } from "react-icons/bi";
import img2 from "../../assets/seller.png";
import img1 from "../../assets/gift.png";
import { HashLink as Link } from "react-router-hash-link";

function Contentnavigator() {
  return (
    <div className="maintain">
      <div className="icon-edt hover-underline-animation left">
        {" "}
        <Link to="#offerpage">
          {" "}
          <img src={img1} alt="@" style={{ width: "30px" }} /> Offers
        </Link>
      </div>
      <div className="icon-edt hover-underline-animation center">
        {" "}
        <Link to="#category">
          {" "}
          <BiSolidCategoryAlt style={{ fontSize: "30px" }} /> Categories
        </Link>
      </div>
      <div className="icon-edt hover-underline-animation right">
        {" "}
        <Link to="#sellpage">
          {" "}
          <img src={img2} alt="@" style={{ width: "30px" }} /> Sell Your Book
          Now
        </Link>
      </div>
    </div>
  );
}

export default Contentnavigator;
