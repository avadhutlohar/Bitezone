import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const itemCard =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .itemCards;

  if (!resInfo || !itemCard) {
    return <Shimmer />;
  }

  const {
    name: resName,
    cuisines,
    costForTwo,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const costInRupees = costForTwo ? costForTwo / 100 : "N/A";

  return (
    <div className="flex flex-col justify-between">
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
