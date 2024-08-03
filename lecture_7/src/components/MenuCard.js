import React from "react";
const MenuCard = ({ data }) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #f0f0f0",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div>{data.name}</div>
        <div>₹{data.defaultPrice / 100 || data.price / 100}</div>
        <div style={{ fontSize: "12px", fontWeight: 300, color: "gray" }}>
          {data.description}
        </div>
      </div>
      <img
        alt="menuImage"
        style={{ height: "100px", width: "100px", borderRadius: "5px" }}
        src={` https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${data.imageId}`}
      />
    </div>
  );
};
export default MenuCard;
