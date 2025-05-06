import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
  // Local state variable - used to store the list of restaurants
  const [listOfRestaurants, setListOfRestaurants] = useState( resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter the list of restaurants based on avgRating > 4
            const filteredList = listOfRestaurants.filter(
              (res) => parseFloat(res.data.avgRating) > 4
            );
            setListOfRestaurants(filteredList); // Update state with the filtered list
            console.log(filteredList); // Log the filtered list to the console
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
