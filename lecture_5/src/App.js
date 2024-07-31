import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/SearchBar";
import { restaurants } from "./utils/constants";

import "../index.css";

const App = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  return (
    <div>
      <Header />
      <main>
        <SearchBar
          listOfRestaurants={listOfRestaurants}
          setListOfRestaurants={setListOfRestaurants}
        />
        <div className="res-list">
          {listOfRestaurants.map((data) => (
            <div key={data.info.id}>
              <RestaurantCard
                name={data.info.name}
                imageId={data.info.cloudinaryImageId}
                ratings={data.info.avgRating}
                cuisines={data.info.cuisines}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
