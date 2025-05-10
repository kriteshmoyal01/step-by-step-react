

import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  // Local state variable - used to store the list of restaurants
  const [listOfRestaurants, setListOfRestaurants] = useState( resList);
const [searchText, setSearchText] = useState("");
const [filteredRestaurants, setFilteredRestaurants] = useState([]);

 useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257252&lng=77.7002566&collection=80440&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await response.json();
    console.log(json);

    // Safely access the restaurant data
  //  setListOfRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);

  //  setFilteredRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
 
  
  
};
// conditional rendering
// if (listOfRestaurants.length === 0) {
//   return <Shimmer />;
// }


  return listOfRestaurants.length === 0 ? <Shimmer /> : (
  <div className="body">
    <div className="filter">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => {
            console.log(searchText);
            const filteredRestaurants = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
            setListOfRestaurants(filteredRestaurants);
          }}>
          Search
        </button>
      </div>
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
        {/* {filteredRestaurants.map((restaurant) => ( */}
        {listOfRestaurants.map((restaurant) =>
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        )}
      </div>
    </div>
  );
};

export default Body;