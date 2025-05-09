import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleClick = () => {
    setBtnName("Logout");
    console.log(btnName);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="Logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button className="login" onClick={handleClick}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;

// import React, { useState } from "react";
// import { LOGO_URL } from "./utils/constants";

// const Header = () => {
//   const [btnName, setBtnName] = useState("Login");

//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img className="logo" src={LOGO_URL} alt="Logo" />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//           <button
//             className="login"
//             onClick={() => {
//               setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
//             }}
//           >
//             {btnName}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;
