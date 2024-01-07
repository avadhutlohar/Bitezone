import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResList, setFilteredResList] = useState(listOfRestaurant);

  const [serchText, setSerchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4901977&lng=73.8397009&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return !listOfRestaurant.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            onChange={(e) => {
              setSerchText(e.target.value);
              console.log(serchText);
            }}
          />
          <button
            className="searchBtn"
            value={serchText}
            onClick={() => {
              console.log(serchText);
              const filteredList = listOfRestaurant.filter((resData) =>
                resData.info.name
                  .toLowerCase()
                  .includes(serchText.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (resData) => resData.info.avgRating > 4
            );
            setFilteredResList(filteredList);
          }}
          className="filterBtn"
        >
          Top Rated Restarunts
        </button>
      </div>
      <div className="resContainer">
        {filteredResList.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
}

export default Body;
