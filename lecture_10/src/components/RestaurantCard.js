import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ id, name, imageId, ratings, cuisines }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-40 transform duration-200 hover:scale-105"
      onClick={() => {
        navigate(`/restaurants/${id}`);
      }}
    >
      <img
        className="w-[100%] h-[50%] rounded-2xl"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
      />
      <div style={{ padding: "10px" }}>
        <div className="font-bold text-xl">{name}</div>
        <div>{ratings}</div>
        <div className="overflow-hidden text-gray-500 truncate">
          {cuisines.join(",")}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
