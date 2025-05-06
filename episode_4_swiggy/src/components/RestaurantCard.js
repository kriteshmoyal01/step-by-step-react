import { CON_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const data = resData.data;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CON_URL + data.cloudinaryImageId}
      />
      <h3>{data.name}</h3>
      <p className="cuisine">{data.cuisines?.join(", ")}</p>
      <div className="details">
        <span className="rating">⭐ {data.avgRating}</span>
        <span className="dot">•</span>
        <span>{data.deliveryTime} MINS</span>
        <span className="dot">•</span>
        <span>₹{data.costForTwo / 100}</span>
      </div>
      <h4>₹{data.costForTwo / 100} FOR TWO</h4>
      <p className="delivery">🛵 FREE DELIVERY</p>
      <p className="quick-view">QUICK VIEW</p>
    </div>
  );
};

export default RestaurantCard;
