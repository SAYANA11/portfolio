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
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;