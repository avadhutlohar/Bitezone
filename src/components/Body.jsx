import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API_URL } from "../utils/constants";

function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResList, setFilteredResList] = useState(listOfRestaurant);

  const [serchText, setSerchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_API_URL);
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return ! listOfRestaurant.length ? (
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
          <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
