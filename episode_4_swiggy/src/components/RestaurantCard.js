import { CON_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info || {};

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CON_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p className="cuisine">{cuisines?.join(", ")}</p>
      <div className="details">
        <span className="rating">⭐ {avgRating}</span>
        <span className="dot">•</span>
        <span>{sla?.slaString}</span>
        <span className="dot">•</span>
        <span>₹{costForTwo / 100}</span>
      </div>
      <h4>{sla?.slaString}</h4> {/* Delivery time with fallback */}
      <p className="delivery">🛵 FREE DELIVERY</p>
      <p className="quick-view">QUICK VIEW</p>
    </div>
  );
};

export default RestaurantCard;
