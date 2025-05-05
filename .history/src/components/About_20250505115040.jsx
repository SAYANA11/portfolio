import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Hello! I am Muhammad Husayn Aiyub, a passionate Information Technology
        student with an interest in web development. I enjoy coding, solving
        complex problems, and continuously learning new technologies. Salamat po!
      </p>
      <div className="about-details">
        
        <h3 className="about-subtitle">Contact</h3>
        <p className="contact-info">Email: husayn.aiyub@example.com</p>
        <p className="contact-info">Phone: 09361552965</p>
      </div>
    </div>
  );
};

export default About;