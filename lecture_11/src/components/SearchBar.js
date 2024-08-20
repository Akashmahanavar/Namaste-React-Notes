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
    <div className="m-7 flex gap-5">
      <input
        type="text"
        className="border-solid border-2 rounded-lg"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => handleSearch()}
      >
        Search
      </button>
      <button
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
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
