import React from "react";

const SearchBar = ({ listOfRestaurants, setListOfRestaurants }) => {
  const handleClick = () => {
    setListOfRestaurants(
      listOfRestaurants.filter((data) => data.info.avgRating >= 4.5)
    );
  };
  return (
    <div className="search-conatiner">
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
