import React, { useState } from "react";
import projectImage1 from "./capstone.png"; // Import your project images
import projectImage2 from "./todolist.png";
import projectImage3 from "./pokedex.png";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      id: "1",
      title: "Pet Pal Placement (Capstone Project)",
      description:
        "A web-based platform for adopting pets from shelters, boarding, and foster homes. Users can browse pets, view details, and submit adoption applications.",
      image: projectImage1,
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      liveDemo: "https://deft-cranachan-272e86.netlify.app/Projects",
    },
    {
      id: "2",
      title: "Accounting Task & Job Management System",
      description:
        "A comprehensive web-based system for managing accounting office workflows, tracking project progress, and assigning tasks to team members. Features include task grading, document management, Excel export, and email notifications.",
      image: projectImage2,
      technologies: ["PHP", "MySQL", "JavaScript", "Composer", "Bootstrap"],
      liveDemo: "https://deft-cranachan-272e86.netlify.app/Projects",
    },
    {
      id: "3",
      title: "Rubber Factory Management System",
      description:
        "A manufacturing industry system for tracking rubber production from raw material procurement to inventory and sales. Built as an enterprise system with production workflows and financial reporting.",
      image: projectImage3,
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Chart.js"],
      liveDemo: "https://deft-cranachan-272e86.netlify.app/Projects",
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
              <button
                onClick={() => openModal(project)}
                className="project-button"
              >
                View More Details
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <button className="modal-close-btn" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-technologies">
                <h4 className="tech-label">Technologies Used:</h4>
                <div className="modal-tech-tags">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;