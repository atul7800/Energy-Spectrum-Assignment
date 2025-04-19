import React from "react";
import "../styles/othisis.css";
import Templates from "./Templates";
import RootCanal from "./Rootcanal";
import SideNavbar from "./SideNavbar";
import TopNavbar from "./TopNavbar";

export default function Othisis() {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="layout">
          <TopNavbar />

          <div className="sideNavContainer">
            <SideNavbar />
          </div>

          <div className="middleContainer">
            <div className="leftRightPannelsContainer">
              <div className="leftPannel">
                <Templates />
              </div>
              <div className="rightPannel">
                <RootCanal />
              </div>
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          <div className="saveReferBtns">
            <button className="referBtn">Rend Referral</button>
            <button className="saveNoteBtn">Save Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}
