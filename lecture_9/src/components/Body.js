import React, { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import RestaurantCardShimmerUI from "./RestaurantCardShimmerUI";
import SearchBar from "./SearchBar";
import useFetchData from "../utils/useFetchData";

export default function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const response = useFetchData(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  useEffect(() => {
    const newResponse =
      response?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(newResponse);
    setFilteredRestaurants(newResponse);
  }, [response]);
  return (
    <div>
      <SearchBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="res-list">
        {Array.isArray(filteredRestaurants) &&
        filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((data) => (
            <div key={data.info.id}>
              <RestaurantCard
                id={data.info.id}
                name={data.info.name}
                imageId={data.info.cloudinaryImageId}
                ratings={data.info.avgRating}
                cuisines={data.info.cuisines}
              />
            </div>
          ))
        ) : (
          <RestaurantCardShimmerUI />
        )}
      </div>
    </div>
  );
}
