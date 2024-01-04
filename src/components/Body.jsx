import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import { resList } from "../utils/constants";


function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        {resList.map((res) => {
          <RestaurantCard resData={res} />;
        })}
      </div>
    </div>
  );
}

export default Body;
