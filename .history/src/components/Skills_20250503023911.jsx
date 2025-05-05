import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "Responsive Design",
    "Problem Solving",
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-icon">✔</span> {/* Add an icon for better visual hierarchy */}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;