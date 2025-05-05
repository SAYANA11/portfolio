import React, { useState } from "react";
import myPhoto from "./sayana.jpg";
import "./Hero.css";

const Hero = () => {
  const [works, setWorks] = useState([
    "Portfolio Website",
    "E-commerce App",
    "Blog Platform",
  ]);

  const [newWork, setNewWork] = useState("");

  const addWork = () => {
    if (newWork.trim()) {
      setWorks([...works, newWork]);
      setNewWork("");
    }
  };

  return (
    <div className="hero-container">
      <div className="name">
        <h1>Aiyub, Muhammad Husayn</h1>
        <p>Bachelor of Science in Information Technology</p>
        <div className="photo">
          <img src={myPhoto} alt="Muhammad Husayn Aiyub" />
        </div>
      </div>
      <h3>My Works</h3>
      <ul className="works-list">
        {works.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
      <div className="add-work">
        <input
          type="text"
          placeholder="Add a new work"
          value={newWork}
          onChange={(e) => setNewWork(e.target.value)}
        />
        <button onClick={addWork}>Add Work</button>
      </div>
    </div>
  );
};

export default Hero;