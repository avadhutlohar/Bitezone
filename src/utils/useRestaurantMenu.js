import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();

      if (json?.data) {
        setResInfo(json.data);
      } else {
        console.error("Invalid data format:", json);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
