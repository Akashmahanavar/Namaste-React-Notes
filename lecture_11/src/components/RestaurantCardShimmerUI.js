import React from "react";

export default function RestaurantCardShimmerUI() {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {new Array(25).fill(1).map((data, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#f0f0f0",
            width: "160px",
            height: "300px",
            borderRadius: "20px",
          }}
        ></div>
      ))}
    </div>
  );
}
