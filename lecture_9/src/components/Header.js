import React, { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");
  const online = useInternetStatus();
  return (
    <div className="header-container">
      <img
        className="app-logo"
        src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-2x?logoTemplateVersion=1&v=637810055012670000&text=Offline+Foods&colorpalette=purple"
      />
      <div className="nav-items">
        <ul>
          <li>{online ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/">
            <li>Cart</li>
          </Link>
          <button
            onClick={() =>
              setBtnValue((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnValue}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
