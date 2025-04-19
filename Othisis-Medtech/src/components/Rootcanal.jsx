import React from "react";
import "../styles/rootcanal.css";
import {info, mic, exportIcon, deleteIcon} from "../assets/assets";

export default function RootCanal() {
  return (
    <div className="rootCanalContainer">
      <div className="sectionTitle">
        <h2>Root Canal</h2>
        <div>
          <img src={info} alt="info icon" />
        </div>
      </div>
      <div className="btns">
        <button className="resumeBtn btn">
          <img src={mic} alt="" />
          Resume
        </button>
        <div className="exportAndDel btn">
          <img src={exportIcon} className="exportBtn" />
          <img src={deleteIcon} alt="delete btn" />
        </div>
      </div>
    </div>
  );
}
