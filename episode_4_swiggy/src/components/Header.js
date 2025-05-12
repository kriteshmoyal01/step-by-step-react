import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
        <span className="logo-text">Food Logo</span>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
