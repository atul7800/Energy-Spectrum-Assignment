import React, {useEffect, useState} from "react";
import "../styles/templates.css";
import {searchIcon, editIcon} from "../assets/assets";

export default function Templates() {
  const [templates, setTemplates] = useState([
    "Subjective",
    "Objective",
    "Assessment & Plan",
    "Findings",
    "Diagnoses",
    "Treatment",
    "Recovery",
    "Objective",
    "Assessment & Plan",
    "Treatment",
    "Objective",
    "Treatment",
    "Diagnoses",
    "Recovery",
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTemplates, setFilteredTemplates] = useState(templates);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredTemplates(templates);
    } else {
      const filteredTemplates = templates.filter((template) =>
        template.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTemplates(filteredTemplates);
    }
  }, [searchQuery]);

  const handleDragStart = (e, template) => {
    e.dataTransfer.setData("text/plain", template); // Store the template title in the dataTransfer object
  };

  const search = () => {
    if (!searchQuery.trim()) {
      setFilteredTemplates(templates);
    } else {
      const filteredTemplates = templates.filter((template) =>
        template.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTemplates(filteredTemplates);
    }
  };

  return (
    <div className="wrapperContainer">
      <div className="templateContainer">
        <h2>Template</h2>
        <div className="optionsContainer">
          <div className="template search">
            <input
              type="text"
              placeholder="Search Templates"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span style={{cursor: "pointer"}} onClick={() => search()}>
              <img src={searchIcon} alt="" />
            </span>
          </div>

          <div className="templateOptions">
            {filteredTemplates.map((template, index) => (
              <div
                key={index}
                className="template"
                draggable={true}
                onDragStart={(e) => handleDragStart(e, template)}
              >
                {template}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="editController">
        <div>
          Edit
          <img src={editIcon} alt="edit" />
        </div>
      </div>
    </div>
  );
}
