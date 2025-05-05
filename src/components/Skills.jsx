import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png", // Example logo URL
      description: "The foundation of web structure and content.",
    },
    {
      name: "CSS",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      description: "Styling and layout for beautiful web designs.",
    },
    {
      name: "JavaScript",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      description: "Dynamic and interactive web functionality.",
    },
    {
      name: "React",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      description: "Building reusable UI components efficiently.",
    },
    {
      name: "Git & GitHub",
      logo: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
      description: "Version control and collaboration tools.",
    },
    {
      name: "Responsive Design",
      logo: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      description: "Creating designs that adapt to all devices.",
    },
    {
      name: "Problem Solving",
      logo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
      description: "Analyzing and solving complex challenges.",
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;