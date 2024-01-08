import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4901977&lng=73.8397009&restaurantId=23749"
      );
      const json = await data.json();
      console.log(json);

      if (json?.data) {
        setResInfo(json.data);
      } else {
        // Handle the case when data is not in the expected format
        console.error("Invalid data format:", json);
      }
    } catch (error) {
      // Handle fetch errors
      console.error("Error fetching data:", error);
    }
  };

  // Check if resInfo and nested properties are available
  const itemCard =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .itemCards;

  if (!resInfo || !itemCard) {
    // Handle the case when resInfo or itemCard is undefined or null
    return <Shimmer />; // or render a loading state or redirect to an error page
  }
  const resName = resInfo?.cards[0]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines;
  const cost = resInfo?.cards[0]?.card?.card?.info?.costForTwo;
  return (
    <div className="menu">
      <h1>{resName}</h1>
      <h3>{cuisines}</h3>
      <h3>{"Cost for two : "}{cost/100}</h3>
      <ul>
        {itemCard.map((item, index) => (
          <li key={index}>{item?.card?.info?.name}- {item?.card?.info?.price /100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
