import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ id, name, imageId, ratings, cuisines }) => {
  const navigate = useNavigate();

  return (
    <div
      className="res-card-conatiner"
      onClick={() => {
        navigate(`/restaurants/${id}`);
      }}
    >
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
