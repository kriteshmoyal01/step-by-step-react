import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // Start with an empty array
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();



    // Find the card that contains restaurant data safely
    const restaurantCard = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log(restaurants); // For debugging, inspect the structure of the fetched data

    setListOfRestaurants(restaurants); // Once data is fetched, set it to state
    setFilteredRestaurants(restaurants); // Filter list is initially the same as the fetched data
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) // Correct access path
    );
    setFilteredRestaurants(filtered);
  };

  const handleFilter = () => {
    const filtered = listOfRestaurants.filter(
      (res) => parseFloat(res?.info?.avgRating) > 4 // Correct access path
    );
    setFilteredRestaurants(filtered);
  };

  // Conditional rendering: Show shimmer while data is loading
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState(resList);
//   const [searchText, setSearchText] = useState("");
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await response.json();

//     // Find the card that contains restaurant data safely
//     const restaurantCard = json?.data?.cards?.find(
//       (card) =>
//         card?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );

//     const restaurants =
//       restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

//     console.log(restaurants); // For debugging, inspect the structure of the fetched data

//     setListOfRestaurants(restaurants);
//     setFilteredRestaurants(restaurants);
//   };

//   // Handle search functionality
//   const handleSearch = () => {
//     const filtered = listOfRestaurants.filter((res) =>
//       res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) // Correct access path
//     );
//     setFilteredRestaurants(filtered);
//   };

//   // Handle filter for top-rated restaurants
//   const handleFilter = () => {
//     const filtered = listOfRestaurants.filter(
//       (res) => parseFloat(res?.info?.avgRating) > 4 // Correct access path
//     );
//     setFilteredRestaurants(filtered);
//   };

//   return listOfRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//         <button className="filter-btn" onClick={handleFilter}>
//           Top Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {filteredRestaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
// import Shimmer from "./Shimmer";
// const Body = () => {
//   // Local state variable - used to store the list of restaurants
//   const [listOfRestaurants, setListOfRestaurants] = useState( resList);
// const [searchText, setSearchText] = useState("");
// const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//  useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   const response = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   );
//   const json = await response.json();

//   // Find the card that contains restaurant data safely
//   const restaurantCard = json?.data?.cards?.find(
//     (card) =>
//       card?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );

//   const restaurants =
//     restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

//   console.log(restaurants);

//   setListOfRestaurants(restaurants);
//   setFilteredRestaurants(restaurants);
// };

// // conditional rendering
// // if (listOfRestaurants.length === 0) {
// //   return <Shimmer />;
// // }


//   return listOfRestaurants.length === 0 ? <Shimmer /> : (
//   <div className="body">
//     <div className="filter">
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button onClick={() => {
//             console.log(searchText);
//             const filteredRestaurants = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
//             setListOfRestaurants(filteredRestaurants);
//           }}>
//           Search
//         </button>
//       </div>
//      <button
//   className="filter-btn"
//   onClick={() => {
//     const filteredList = listOfRestaurants.filter(
//       (res) => parseFloat(res.info.avgRating) > 4
//     );
//     setListOfRestaurants(filteredList);
//     console.log(filteredList);
//   }}
// >
//   Top Rated Restaurants
// </button>

//       </div>

//       <div className="res-container">
//         {filteredRestaurants.map((restaurant) => ( 
    
//           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

// {/* 80   //  {listOfRestaurants.map((restaurant) => */}