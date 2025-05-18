import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MENU_URL } from '../utils/constant';

const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const resId = useRestaurant(resId);

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        try {
            console.log('Restaurant ID:', resId); // Debugging
            const response = await fetch(`${MENU_URL}${resId}`);
            if (!response.ok) throw new Error('Failed to fetch menu');
            const json = await response.json();
            console.log('Fetched Menu Data:', json.data); // Debugging
            setMenuData(json.data);
        } catch (err) {
            console.error('Error fetching menu:', err);
            setError(err.message);
        }
    };

    if (error) return <div style={{ color: 'red', padding: '20px' }}>{error}</div>;
    if (menuData === null) return <Shimmer />;

    // Extract restaurant info
    const info = menuData?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info;

    // Extract item cards more reliably
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
