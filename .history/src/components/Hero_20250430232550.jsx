import React from "react";
import "./Hero.css";

const Hero = ({ works }) => {
  return (
    <div className="hero-container">
      <div className="name">
        <h1>Aiyub, Muhammad Husayn</h1>
        <p>Bachelor of Science in Information Technology</p>
        <div className="photo">
          <img src="./sayana.jpg" alt="Muhammad Husayn Aiyub" />
        </div>
      </div>
      <h3>My Works</h3>
      <ul className="works-list">
        {works.map((work, index) => (
          <li key={index} className="work-item">
            <h4>{work.title}</h4>
            <p>{work.description}</p>
            {work.image && <img src={URL.createObjectURL(work.image)} alt={work.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;