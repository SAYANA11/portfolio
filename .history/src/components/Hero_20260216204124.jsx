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

      {/* Professional Summary */}
      <div className="about-section">
        <h2 className="section-title">Professional Summary</h2>
        <p className="about-text">
          IT graduate passionate about building simple, useful web tools and helping teams stay organized. I create real-world projects and enjoy solving problems while supporting others in a virtual work environment.
        </p>
      </div>

      {/* Soft Skills Section */}
      <div className="soft-skills-section">
        <h2 className="section-title">Core Competencies</h2>
        <div className="soft-skills-grid">
          <div className="skill-item">
            <div className="skill-icon">👂</div>
            <h3>Active Listening & Communication</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">💭</div>
            <h3>Emotional Awareness & Empathy</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">🔐</div>
            <h3>Professionalism & Confidentiality</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">⚡</div>
            <h3>Fast & Accurate Typing</h3>
          </div>
          <div className="skill-item">
            <div className="skill-icon">⏱️</div>
            <h3>Stress & Time Management</h3>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div className="contact-content">
              <p className="contact-label">Phone</p>
              <p className="contact-value">+63 9361552065</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div className="contact-content">
              <p className="contact-label">Email</p>
              <p className="contact-value">sayanaiyub6@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-content">
              <p className="contact-label">Location</p>
              <p className="contact-value">Zamboanga City, Philippines</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <div className="contact-content">
              <p className="contact-label">LinkedIn</p>
              <a href="https://linkedin.com/in/sayn-aiyub-492046963" target="_blank" rel="noopener noreferrer" className="contact-link">
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;