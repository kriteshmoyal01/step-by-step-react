import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resid } = useParams();  // Get restaurant ID from URL
  const [resInfo, setResInfo] = useState(null);  // Initialize state as null

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resid}`
      );
      const json = await data.json();
      console.log(json);  // Log the entire response for debugging
      setResInfo(json.data);  // Set the response data
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  // Destructuring essential info from the response
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = 
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards = resInfo?.cards?.[2]?.card?.card?.itemCards || [];

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name || "Restaurant"}</h1>
      <p>{cuisines?.join(", ")} - {costForTwoMessage || "Not available"}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item, index) => (
          <li key={index}>{item?.card?.info?.name}</li>  // Dynamically rendering menu items
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
