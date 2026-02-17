import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      description: "Web structure and semantic markup.",
    },
    {
      name: "CSS & Tailwind",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      description: "Styling, layouts, and responsive design.",
    },
    {
      name: "JavaScript",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      description: "Dynamic functionality and interactivity.",
    },
    {
      name: "PHP & Laravel",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919841.png",
      description: "Backend development and frameworks.",
    },
    {
      name: "MySQL",
      logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      description: "Database design and management.",
    },
    {
      name: "Git & GitHub",
      logo: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
      description: "Version control and collaboration.",
    },
    {
      name: "Problem-Solving",
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