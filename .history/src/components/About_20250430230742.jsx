import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p className="about-description">
        Hello! I am Muhammad Husayn Aiyub, a passionate Information Technology
        student with an interest in web development. I enjoy coding, solving
        complex problems, and continuously learning new technologies. Salamat po!
      </p>
      <div className="about-details">
        <h3>Skills</h3>
        <ul>
          <li>Web Development</li>
          <li>JavaScript, React</li>
          <li>Problem Solving</li>
        </ul>
        <h3>Contact</h3>
        <p>Email: husayn.aiyub@example.com</p>
      </div>
    </div>
  );
};

export default About;