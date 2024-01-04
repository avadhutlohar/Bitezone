import React from "react";

function RestaurantCard({ resData }) {
  return (
    <div className="resCard" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="resLogo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y2hukcrkdh4p4v6djdff"
        alt=""
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join()}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
}

export default RestaurantCard;
