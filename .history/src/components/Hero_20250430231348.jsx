import React from "react";
import myPhoto from "./sayana.jpg";
import "./Hero.css";

const Hero = ({ works }) => {
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
    </div>
  );
};

export default Hero;