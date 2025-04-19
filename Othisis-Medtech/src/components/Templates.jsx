import React, {useEffect, useState} from "react";
import "../styles/templates.css";
import {searchIcon} from "../assets/assets";

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
            <div key={index} className="template">
              {template}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
