import React from "react";
import projectImage1 from "./capstone.png"; // Import your project images
import projectImage2 from "./todolist.png";
import projectImage3 from "./pokedex.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Pet Pal Placement (Capstone Project)",
      description:
        "A web-based platform for adopting pets from shelters, boarding, and foster homes. Users can browse pets, view details, and submit adoption applications.",
      image: projectImage1,
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    },
    {
      id: "2",
      title: "To do list",
      description:
        "To-Do List is a simple and efficient task management app that helps users organize, track, and complete their daily tasks. Users can add, edit, and delete tasks, as well as mark them as complete to stay productive and focused.",
      image: projectImage2,
      liveDemo: "https://example.com/rizal-park", // Replace with your live demo link
    },
    {
      id: "3",
      title: "PokeDex",
      description:
        "Pokédex is a Pokémon app where battles are based on each Pokémon’s stats, adding a strategic twist to exploring and fighting with your favorite Pokémon.",
      image: projectImage3,
      liveDemo: "https://example.com/portfolio", // Replace with your live demo link
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">Professional Experience & Freelance Projects</p>
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
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View More Details
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;