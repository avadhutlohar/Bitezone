import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API_URL } from "../utils/constants";

function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResList, setFilteredResList] = useState(listOfRestaurant);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLable(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_API_URL);
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurant(restaurants);
    setFilteredResList(restaurants);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurant.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResList(filteredList);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurant.filter(
      (resData) => resData.info.avgRating > 4
    );
    setFilteredResList(filteredList);
  };

  return !listOfRestaurant.length ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      <div className="flex gap-5 p-5 justify-between">
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-indigo-500 text-white rounded-md inline-flex items-center justify-center p-2 ml-2 text-center text-base font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          onClick={handleTopRated}
          className="bg-indigo-500 text-white rounded-md inline-flex items-center justify-center p-2 text-center text-base font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {filteredResList.map((resData) => (
          <Link key={resData.info.id} to={`/restaurants/${resData.info.id}`}>
            {resData.info.promoted ? (
              <PromotedRestaurantCard resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
