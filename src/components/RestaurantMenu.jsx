import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { redirect } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4901977&lng=73.8397009&restaurantId=23749&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };
  

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.data?.cards[0]?.card?.card?.info.name}</h1>
      <h3>{resInfo?.data?.cards[0]?.card?.card?.info.cuisines.join()}</h3>
      <h3>{resInfo?.data?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
      <ul>
        <li>{resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards[0].card.info.name}</li>
        <li>{resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards[1].card.info.name}</li>
        <li>{resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards[2].card.info.name}</li>
        <li>{resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards[3].card.info.name}</li>
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
