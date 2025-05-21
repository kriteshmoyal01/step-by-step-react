import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.example.com/menu/${resId}`);
      const json = await response.json();
      setMenuData(json.data); // Adjust according to actual API structure
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  return menuData;
};

export default useRestaurantMenu;
