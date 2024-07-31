import React, { useState } from "react";
import { restaurants } from "../utils/constants";

const SearchBar = ({ listOfRestaurants, setListOfRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  const handleClick = () => {
    setListOfRestaurants(
      listOfRestaurants.filter((data) => data.info.avgRating >= 4.5)
    );
  };
  const handleSearch = () => {
    setListOfRestaurants(
      restaurants.filter((data) =>
        data.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  return (
    <div className="search-conatiner">
      <span>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </span>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Top Rated restaurants
      </button>
    </div>
  );
};
export default SearchBar;
