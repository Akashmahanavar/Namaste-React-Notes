import React from "react";
import { useNavigate } from "react-router-dom";
import starRating from "../../public/Images/starRating.svg";

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
        <div>
          <img src="" />
          {ratings}
        </div>
        <div className="overflow-hidden text-gray-500 truncate">
          {cuisines.join(",")}
        </div>
      </div>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div
          className="absolute z-10 text-white w-40 text-center rounded-t-2xl"
          style={{
            background:
              "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)",
          }}
        >
          {props.discountData.header + " " + props.discountData.subHeader}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
