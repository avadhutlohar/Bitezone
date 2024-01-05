import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

function Body() {
  const[listOfRestaurant,setListOfRestaurant]= useState(resList);


  
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={
            () => {
           const filteredList = resList.filter((resData) => resData.info.avgRating > 4)
           setListOfRestaurant(filteredList)
          }
         
        }
          className="filterBtn"
        >
          Top Rated Restarunts
        </button>
      </div>
      <div className="resContainer">
        {listOfRestaurant.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
}

export default Body;
