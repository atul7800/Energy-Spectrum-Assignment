import React from "react";
import "../styles/topnavbar.css";
import {logo, notifications, personNav, dropdownArrow} from "../assets/assets";

export default function TopNavbar() {
  return (
    <div className="navBar">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navIconsContainer">
        <div className="navIcons">
          <img src={notifications} alt="notifications icon" />
        </div>
        <div className="personIconContainer">
          <div className="personIcon">
            <span className="person">
              <img src={personNav} alt="person icon" />
            </span>
            <span className="dropDown">
              <img src={dropdownArrow} alt="person icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
