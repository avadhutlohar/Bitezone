import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();

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

  const itemCard =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .itemCards;

  if (!resInfo || !itemCard) {
    // Handle the case when resInfo or itemCard is undefined or null
    return <Shimmer />; // or render a loading state or redirect to an error page
  }

  const cardInfo = resInfo?.cards[0]?.card?.card?.info;

  const { name: resName, cuisines, costForTwo } = cardInfo || {};

  // Convert cost for two from paise to rupees
  const costInRupees = costForTwo ? costForTwo / 100 : "N/A";

  return (
    <div className="menu">
      <h1>{resName || "Restaurant Name Not Available"}</h1>
      <h3>{cuisines || "Cuisine Types Not Available"}</h3>
      <h3>{`Cost for two: Rs. ${costInRupees}`}</h3>

      <ul>
        {itemCard.map((item, index) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
