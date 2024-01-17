import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex items-center justify-between mb-4 border border-gray-300 p-4 rounded ">
          <div>
            <p className="text-base mb-1 font-bold">{item?.card?.info?.name}</p>
            <p className="text-base">Rs. {item?.card?.info?.price / 100}</p>
            <p className="text-sm mt-2 ">{item?.card?.info?.description}</p>
          </div>
          <img
            src={CDN_URL + item?.card?.info?.imageId}
            alt={item?.card?.info?.name || "Food Image"}
            className="w-1/4 h-40 object-cover rounded-md ml-4"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
