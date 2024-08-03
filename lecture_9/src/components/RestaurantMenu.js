import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import useFetchData from "../utils/useFetchData";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const response = useFetchData(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
  );
  useEffect(() => {
    setResInfo(response);
  }, [response]);

  return (
    resInfo && (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: 700 }}>
            {resInfo?.cards[2]?.card?.card?.info.name}
            <div
              style={{
                width: "600px",
                borderRadius: "20px",
                border: "2px solid #f0f0f0",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
                (data) => (
                  <MenuCard key={data.card.info.id} data={data.card.info} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default RestaurantMenu;
