import React, { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, isOpen, setShowIndex }) => {
  const toggleAccordion = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        className={`accordion ${
          isOpen ? "border-b rounded-md bg-gray-100" : ""
        } p-4 cursor-pointer`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between mb-2 ">
          <span className="text-lg font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform transform ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </div>
        {isOpen && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
