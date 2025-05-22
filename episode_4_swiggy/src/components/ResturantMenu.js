import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../hooks/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { menuData, error } = useRestaurantMenu(resId);

  if (error) return <div style={{ color: 'red', padding: '20px' }}>{error}</div>;
  if (menuData === null) return <Shimmer />;

  const info = menuData?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info;

  const itemCards = menuData?.cards
    ?.flatMap(card => card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [])
    ?.flatMap(group => group?.card?.card?.itemCards || []);

  return (
    <div className="menu-container" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{info?.name}</h1>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', gap: '10px' }}>
        <span style={{ backgroundColor: '#48c479', color: 'white', padding: '4px 8px', borderRadius: '5px' }}>
          ⭐ {info?.avgRating} ({info?.totalRatingsString})
        </span>
        <span>•</span>
        <span>{info?.costForTwoMessage}</span>
      </div>

      <div style={{ marginTop: '10px', color: 'orange', fontWeight: 'bold' }}>{info?.cuisines?.join(', ')}</div>
      <div style={{ marginTop: '5px', color: '#555' }}>Outlet: <strong>{info?.areaName}</strong></div>
      <div style={{ marginTop: '5px', color: '#555' }}>⏱ {info?.sla?.deliveryTime || '40'} mins</div>

      <h2 style={{ marginTop: '20px' }}>Menu</h2>

      {itemCards && itemCards.length > 0 ? (
        <ul>
          {itemCards.map((item, index) => {
            const itemInfo = item?.card?.info;
            const price = itemInfo?.price ?? itemInfo?.defaultPrice;
            return (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>{itemInfo?.name}</strong> — {itemInfo?.description || 'No description'} —{" "}
                {price ? `₹${price / 100}` : 'Price not available'}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No menu items available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
