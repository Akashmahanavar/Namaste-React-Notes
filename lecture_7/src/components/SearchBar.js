import React, { useState } from "react";

const SearchBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  const handleClick = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((data) => data.info.avgRating >= 4.5)
    );
  };
  const handleSearch = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((data) =>
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
