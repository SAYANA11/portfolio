import React from "react";
import myPhoto from "./sayana.jpg"; 
import "./Hero.css"; 

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="name">
        <h1>Aiyub, Muhammad Husayn</h1>
        <p>Bachelor of Science in Information Technology</p>
        <div className="photo">
          <img src={myPhoto} alt="Sayn" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
