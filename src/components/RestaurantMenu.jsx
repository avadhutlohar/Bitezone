import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const itemCard =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .itemCards;

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

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
    <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md ">
      <h1 className="text-3xl font-bold mb-4">
        {resName || "Restaurant Name Not Available"}
      </h1>

      <h3 className="text-lg mb-2">
        {cuisines || "Cuisine Types Not Available"}
      </h3>
      <h3 className="text-lg mb-4">{`Cost for two: Rs. ${costInRupees}`}</h3>

      {categories?.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ))}

      {/*    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {itemCard.map((item, index) => (
          <div
            key={item?.card?.info?.id}
            className="bg-gray-100 p-4 rounded-md"
          >
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name || "Food Image"}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="text-base">{item?.card?.info?.name}</p>
            <p className="text-base">Rs. {item?.card?.info?.price / 100}</p>
          </div>
        ))}
        </div>*/}
    </div>
  );
};

export default RestaurantMenu;
