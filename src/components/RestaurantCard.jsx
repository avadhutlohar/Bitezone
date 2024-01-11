import React from "react";
import { CDN_URL } from "../utils/constants";



function RestaurantCard({ resData }) {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <img
        className="w-full h-48 object-cover object-center"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{cuisines.join(', ')}</p>
        <p className="text-gray-700 mb-2">Cost for Two: ${costForTwo}</p>
        <p className="text-yellow-500">{avgRating} ⭐</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
