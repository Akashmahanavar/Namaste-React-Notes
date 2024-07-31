import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./restaurants";

const Header = () => {
  return (
    <div className="header-container">
      <img
        className="app-logo"
        src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-2x?logoTemplateVersion=1&v=637810055012670000&text=Offline+Foods&colorpalette=purple"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return <div className="search-conatiner">SearchBar</div>;
};
const RestaurantCard = ({ name, imageId, ratings, cuisines }) => {
  return (
    <div className="res-card-conatiner">
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
      />
      <div style={{ padding: "10px" }}>
        <div>{name}</div>
        <div>{ratings}</div>
        <div className="cuisines">{cuisines.join(",")}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SearchBar />
        <div className="res-list">
          {restaurants.map((data) => (
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
