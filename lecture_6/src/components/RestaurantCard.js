import React from "react";

const RestaurantCard = ({ name, imageId, ratings, cuisines }) => {
  return (
    <div className="res-card-conatiner">
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
      />
      <div style={{ padding: "10px" }}>
        <div>{name}</div>
        <div>{ratings}</div>
        <div className="cuisines">{cuisines.join(",")}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
