import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData"; // Assuming you have mock data

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");

  // This useEffect hook simulates fetching the data
  useEffect(() => {
    // Assuming `resList` is an array of restaurant data
    setListOfRestaurants(resList);
  }, []);

  // Filter function based on searchText
  const handleSearch = () => {
    const filteredList = resList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search restaurants"
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                // Filter the restaurants with avgRating > 4
                const filteredList = listOfRestaurants.filter(
                  (res) => res.data.avgRating > 4
                );
                setListOfRestaurants(filteredList);
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
        </>
      )}
    </div>
  );
};

export default Body;


// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
// import Shimmer from "./Shimmer";

// const Body = () => {
//     const [listOfRestaurants, setListOfRestaurants] = useState(resList);
// //   const fetchData = async () => {
// // const fetchdata = async () => {
// //   try {
// //     const data = await fetch(
// //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257252&lng=77.7002566&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
// //     );
// //     const json = await data.json();
// //     console.log(json); // Inspect the response structure

// //     // Attempt to access the restaurant data
// //     const restaurants = json?.data?.cards?.[0]?.card?.gridElements?.infoWithStyle?.restaurants;

// //     if (Array.isArray(restaurants)) {
// //       setListOfRestaurants(restaurants);
// //     } else {
// //       console.error("Restaurant data not found in the response.");
// //     }
// //   } catch (error) {
// //     console.error("Error fetching data:", error);
// //   }
// // };


// // const Body = () => {
// //   // Local state variable - used to store the list of restaurants
//   const [listOfRestaurants, setListOfRestaurants] = useState(resList);
//   const fetchData = async () => {
    
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257252&lng=77.7002566&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//       );
//       const json = await data.json();
//       console.log(json);
  
   
       
  
      
    
//   };

//   if (listOfRestaurants.length === 0) {
//     return <Shimmer />;
//   }

  

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             // Filter the list of restaurants based on avgRating > 4
//             const filteredList = listOfRestaurants.filter(
//               (res) => parseFloat(res.data.avgRating) > 4
//             );
//             setListOfRestaurants(filteredList); // Update state with the filtered list
//             console.log(filteredList); // Log the filtered list to the console
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {listOfRestaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body.json;