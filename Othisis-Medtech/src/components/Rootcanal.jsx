import React, {useState} from "react";
import "../styles/rootcanal.css";
import {info, mic, exportIcon, deleteIcon} from "../assets/assets";

export default function RootCanal() {
  const [rootCanalInfo, setRootCanalInfo] = useState([
    {
      title: "Subjective",
      body: ["Toothache for few days"],
    },
    {
      title: "History of Presenting Complaints",
      body: ["Toothache: present for few days"],
    },
    {
      title: "Extra Oral Examination",
      body: ["Not performed"],
    },
    {
      title: "Intra Oral Examination",
      body: ["Tenderness around molar", "Swollen gum"],
    },
    {
      title: "Radiographic Findings",
      body: ["X-ray planned to confirm extent of infection"],
    },
    {
      title: "Diagnoses",
      body: ["Suspected tooth abscess"],
    },
  ]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedData = e.dataTransfer.getData("text/plain");
    if (droppedData) {
      // Insert the new item at the top of the list
      setRootCanalInfo((prev) => [
        {
          title: droppedData,
          body: [],
        },
        ...prev, // Keep the existing items below the new item
      ]);
    }
  };

  return (
    <div className="rootCanalContainer">
      <div className="titleAndBtnsContainer">
        <div className="sectionTitle">
          <h2>Root Canal</h2>
          <div className="infoIcon btn ">
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
      <div
        className="infoCardContainer"
        onDragOver={(e) => e.preventDefault()} // Allow drop on the container
        onDrop={handleDrop} // Handle the drop action
      >
        {rootCanalInfo &&
          rootCanalInfo.map((info, index) => (
            <div key={index} className="infoCard">
              <p className="infoTitle">{info.title}:</p>
              <ul>
                {info.body &&
                  info.body.map((body, idx) => <li key={idx}>{body}</li>)}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
