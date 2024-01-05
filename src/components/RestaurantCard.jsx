import React from "react";
import { CDN_URL } from "../utils/constants";



function RestaurantCard({ resData }) {
  const { name, cuisines, costForTwo, avgRating ,cloudinaryImageId} = resData?.info;
  return (
    <div className="resCard" >
      <img
        className="resLogo"
        src={CDN_URL + cloudinaryImageId}
        alt="Resimg"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
}

export default RestaurantCard;
