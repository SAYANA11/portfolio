import React, { useState } from "react";
import myPhoto from "./sayana.jpg";
import "./about/About.css";

const About = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li 
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setActiveSection("home")}
          >
            Home
          </li>
          <li 
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setActiveSection("about")}
          >
            About Me
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <div className={`section ${activeSection === "home" ? "show" : "hide"}`}>
        <div className="container">
          <div className="name">
            <h1>Aiyub, Muhammad Husayn</h1>
            <p>Bachelor of Science in Information Technology</p>
            <div className="photo">
              <img src={myPhoto} alt="Sayn" />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className={`section ${activeSection === "about" ? "show" : "hide"}`}>
        <div className="container about">
          <h2>About Me</h2>
          <p>
            Hello! I am Muhammad Husayn Aiyub, a passionate Information Technology 
            student with an interest in web development, cybersecurity, and software 
            engineering. I enjoy coding, solving complex problems, and continuously 
            learning new technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;



