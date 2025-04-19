import React from "react";
import "../styles/sidenavbar.css";
import {
  rightArrow,
  newIcon,
  calendar,
  setting,
  file,
  person,
} from "../assets/assets";

export default function SideNavbar() {
  return (
    <div className="sideNavbarContainer">
      <div className="menuIconContainer">
        <img src={rightArrow} alt="right arrow " />
      </div>
      <div className="menuIconContainer">
        <img src={newIcon} alt="new" />
      </div>
      <div className="menuIconContainer">
        <img src={calendar} alt="calendar" />
      </div>
      <div className="menuIconContainer">
        <img src={file} alt="file" />
      </div>
      <div className="menuIconContainer">
        <img src={person} alt="person" />
      </div>
      <div className="menuIconContainer">
        <img src={setting} alt="setting" />
      </div>
    </div>
  );
}
