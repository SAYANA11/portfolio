import React from "react";
import projectImage1 from "./capstone.jpg"; // Import your project images
import projectImage2 from "./rizal1.jpg";
import projectImage3 from "./rizal1.jpg";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Project 1",
      image: projectImage1, // Use imported image
    },
    {
      id: "2",
      title: "Project 2",
      image: projectImage2, // Use imported image
    },
    {
      id: "3",
      title: "Project 3",
      image: projectImage3, // Use imported image
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;