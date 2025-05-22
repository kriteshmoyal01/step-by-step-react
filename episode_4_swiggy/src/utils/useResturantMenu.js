import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${MENU_URL}${resId}`);
        if (!response.ok) throw new Error("Failed to fetch menu");
        const json = await response.json();
        setMenuData(json.data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (resId) fetchMenu();
  }, [resId]);

  return { menuData, error };
};

export default useRestaurantMenu;
