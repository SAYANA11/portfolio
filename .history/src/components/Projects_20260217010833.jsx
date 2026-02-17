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
      title: "Project Management & Job Grading System",
      description: "Developed a full-stack web application for managing project assignments and team member performance evaluation. System features role-based dashboards for administrators (job creation, grading, analytics) and members (task tracking, file uploads, progress monitoring). Implemented individual member grading based on step completion timelines with configurable grade weight metrics (auto-grade vs quality-grade ratio).",
      fullDescription: "Project Management & Job Grading System - A comprehensive solution for project assignment management and performance evaluation.\n\nKey Features:\n• Role-based access control with admin and member portals\n• Individual member grading system with step-based task tracking\n• Secure file management with validation (extension whitelist, MIME type checking, size limits)\n• Real-time notification system with read/unread announcement tracking\n• Monthly analytics dashboard with performance trends and project status distribution\n• Advanced search and filtering for jobs, members, and archived items\n• Email integration using PHPMailer for alerts and notifications\n• Multi-job Excel export API supporting bulk exports (up to 500 jobs) with CSRF validation, rate limiting, and timezone-aware formatting\n• OAuth2-based Google Drive backup system with secure offline token management; two-step authorization flow with persistent refresh tokens for automated backups",
      image: projectImage1,
      technologies: ["PHP", "MySQL", "JavaScript", "Composer"],
      liveDemo: "https://deft-cranachan-272e86.netlify.app/Projects",
    },
    {
      id: "2",
      title: "Rubber Factory Management System",
      description: "Developed a Laravel-based enterprise management system for rubber production facilities that tracks the complete lifecycle from raw material procurement through production, inventory management, and sales with precise cost tracking and profit analysis.",
      fullDescription: "Rubber Factory Management System - Enterprise solution for rubber production management.\n\nHow It Works:\n• Purchase data → Milling process → Drying (for AGE products) → Baling → Inventory creation with locked cost-per-kg\n• Inventory uses FIFO allocation for sales with weighted-average costing across multiple production batches\n• Excess weights from multiple batches intelligently combine into new bales\n• Automated profit calculations with real-time financial reporting\n\nKey Features:\n• Multi-user role-based access (Admin, Project Manager, Member) with branch isolation\n• Production management (daily reports, milling, drying, baling, excess combinations)\n• Advanced inventory system with permanent cost-locking and FIFO ordering\n• Sales tracking with weighted-average costing and profit margin reporting\n• Modern dark/light mode UI with responsive design and real-time search\n• Optimized database with indexed queries (<1ms response time)",
      image: projectImage3,
      technologies: ["Laravel", "PHP 8.x", "MySQL", "Tailwind CSS", "Chart.js", "JavaScript ES6+"],
      liveDemo: "https://deft-cranachan-272e86.netlify.app/Projects",
    },
    {
      id: "3",
      title: "Dreamall Compliance Management System",
      description: "A Laravel-based web application designed to streamline tax compliance and filing workflows for accounting professionals and clients with role-based access control and automated tracking.",
      fullDescription: "Dreamall Compliance Management System - Tax compliance and filing management solution.\n\nSystem Description:\nFull-stack web application built with Laravel 11, Tailwind CSS, and Vite for managing tax compliance tasks across multiple clients. The system enables team members to track, file, and submit various tax forms (2551Q, 1601C) while admins oversee approvals, payments, and record-keeping. Real-time status updates and workflow progression ensure compliance deadlines are met.\n\nKey Features:\n• Role-Based Workflow Management – Separate member and admin interfaces with distinct permissions for task creation, filing, and payment confirmation\n• Multi-Tax Form Support – Handles multiple tax types (2551Q, 1601C, and other forms) with dynamic form tracking\n• Client Record Management – Centralized database for storing client information, tax obligations, and engagement details\n• Task Assignment & Tracking – Automatic task assignment with due date monitoring and priority levels\n• Auto-Grading System – Automatic status evaluation based on task submission dates; late submissions trigger overdue flags\n• Automated Reminders – System-triggered notifications to create client records and follow up on pending tax requests\n• Secure Authentication – Multi-role user authentication system with audit logs for tracking edits and approvals\n• Document Storage – File upload capability for supporting documents and proof of filing",
      image: projectImage2,
      technologies: ["Laravel 11", "PHP", "MySQL", "Tailwind CSS", "Vite"],
      liveDemo: "https://deft-cranachan-272e86.netlify.app/Projects",
    },
    {
      id: "4",
      title: "Pet Pal Placement (Capstone Project)",
      description:
        "A web-based platform for adopting pets from shelters, boarding, and foster homes. Users can browse pets, view details, and submit adoption applications.",
      image: projectImage1,
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      liveDemo: "https://deft-cranachan-272e86.netlify.app/Projects",
    },
    {
      id: "5",
      title: "Accounting Task & Job Management System",
      description:
        "A comprehensive web-based system for managing accounting office workflows, tracking project progress, and assigning tasks to team members. Features include task grading, document management, Excel export, and email notifications.",
      image: projectImage2,
      technologies: ["PHP", "MySQL", "JavaScript", "Composer", "Bootstrap"],
      liveDemo: "https://deft-cranachan-272e86.netlify.app/Projects",
    },
    {
      id: "6",
      title: "Rubber Factory Management System (Previous)",
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