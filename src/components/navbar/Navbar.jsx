import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>KBT-FOOD.</h1>
        <p>Admin Panel</p>
      </div>
      {/* <img className='logo' src={assets.logo} alt="" /> */}
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
