import React from "react";
import projectImage1 from "./capstone.png"; // Import your project images
import projectImage2 from "./todolist.jpg";
import projectImage3 from "./pokedex.jpg";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Capstone Project",
      description:
        "A comprehensive capstone project showcasing advanced skills in web development and design.",
      image: projectImage1,
      liveDemo: "https://ttechmart.online/", // Replace with your live demo link
    },
    {
      id: "2",
      title: "To do list",
      description:
        "An interactive gallery highlighting the beauty and history of Rizal Park.",
      image: projectImage2,
      liveDemo: "https://example.com/rizal-park", // Replace with your live demo link
    },
    {
      id: "3",
      title: "PokeDex",
      description:
        "A modern portfolio showcasing various projects and achievements.",
      image: projectImage3,
      liveDemo: "https://example.com/portfolio", // Replace with your live demo link
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
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
              <p className="project-description">{project.description}</p>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Live Demo
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;