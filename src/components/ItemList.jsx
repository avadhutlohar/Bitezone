import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex items-center justify-between mb-4 border border-gray-300 p-4 rounded relative">
          <div className="w-1/2">
            <p className="text-base mb-1 font-bold">{item?.card?.info?.name}</p>
            <p className="text-base">Rs. {item?.card?.info?.price / 100}</p>
            <p className="text-sm mt-2">{item?.card?.info?.description}</p>
          </div>
          <div className="top-1/2 relative">
            {item?.card?.info?.imageId ? (
              <div className="w-[160px] h-[140px] rounded-md relative">
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name || "Food Image"}
                  className="w-full h-full rounded-md object-cover"
                />
                <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg">
                    Add
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-[160px] h-[140px] rounded-md bg-gray-100">
                <button className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg">
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
