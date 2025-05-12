import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
console.log("Header rendered");


//I if no dependency array → useEffect is called on every render
//if dependency arraylis empty = [] → useEffect is called on initial render(just once)
//if dependency array is not empty = [btnNameReact] → useEffect is called on every render when btnNameReact changes

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
        <span className="logo-text">Food Logo</span>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button
          className="login"
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            console.log(btnNameReact);
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
