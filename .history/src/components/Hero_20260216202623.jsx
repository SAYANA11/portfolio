import React from "react";
import myPhoto from "./sayana.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Header Section with Photo */}
      <div className="name">
        <h1 className="hero-title">Muhammad Husayn A. Aiyub</h1>
        <p className="hero-subtitle">Bachelor of Science in Information Technology</p>
        <div className="photo">
          <img src={myPhoto} alt="Muhammad Husayn Aiyub" />
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-section">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm an IT graduate passionate about building simple, useful web tools and helping teams stay organized. During my studies, I created real-world projects like a pet adoption website and a project management platform. I enjoy solving problems, learning new technologies, and supporting others in a virtual work environment.
        </p>
      </div>

      {/* Contact Information */}
      <div className="contact-section">
        <h3 className="section-title">Contact Information</h3>
        <div className="contact-details">
          <p><strong>📞 Phone:</strong> +63 9361552065</p>
          <p><strong>📧 Email:</strong> sayanaiyub6@gmail.com</p>
          <p><strong>📍 Address:</strong> 327 Kasalamatan drive., Zamboanga City 1234</p>
          <p><strong>💼 LinkedIn:</strong> <a href="https://linkedin.com/in/sayn-aiyub-492046963" target="_blank" rel="noopener noreferrer">linkedin.com/in/sayn-aiyub-492046963</a></p>
          <p><strong>🌐 Portfolio:</strong> <a href="https://deft-cranachan-272e86.netlify.app/Projects" target="_blank" rel="noopener noreferrer">deft-cranachan-272e86.netlify.app/Projects</a></p>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="skills-summary-section">
        <h3 className="section-title">Key Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Technical Skills</h4>
            <ul>
              <li>Web Development (HTML, CSS, JavaScript)</li>
              <li>Frontend: React</li>
              <li>Backend: PHP, Laravel, Node.js</li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Version Control: Git</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Soft Skills</h4>
            <ul>
              <li>Problem-Solving</li>
              <li>Team Collaboration</li>
              <li>Adaptability & Open to Feedback</li>
              <li>Continuous Learning</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="education-section">
        <h3 className="section-title">Education</h3>
        <div className="education-item">
          <h4>Bachelor of Science in Information Technology</h4>
          <p className="school-name">Western Mindanao State University</p>
          <p className="location">Zamboanga City, Philippines</p>
          <p className="duration">2021 - 2025</p>
        </div>
        <div className="education-item">
          <h4>Senior High School - Technical-Vocational Track</h4>
          <p className="school-name">Universidad de Zamboanga</p>
          <p className="location">Zamboanga City, Philippines</p>
          <p className="duration">2018 - 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;