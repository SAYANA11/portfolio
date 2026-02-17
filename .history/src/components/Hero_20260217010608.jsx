import React from "react";
import myPhoto from "./sayana.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Page Title */}
      <div className="page-header">
        <h1 className="page-title">Muhammad Husayn A. Aiyub's Portfolio</h1>
      </div>

      {/* About Me Section - Two Column Layout */}
      <div className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="title-accent"></div>
        
        <div className="about-layout">
          {/* Left Column */}
          <div className="about-left">
            <h3 className="about-name">Muhammad Husayn A. Aiyub</h3>
            <p className="about-subtitle">Bachelor of Science in Information Technology</p>
            
            <p className="about-text">
              I'm an IT graduate and freelance web developer passionate about building simple, useful web tools and helping teams stay organized. I've developed real-world systems for clients, including project management platforms, compliance tools, and enterprise inventory solutions. I enjoy solving problems, learning new technologies, and supporting teams in virtual work environments.
            </p>

            {/* Contact Info inline */}
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-info-icon">📍</span>
                <p>Zamboanga City, Philippines</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📞</span>
                <a href="tel:+63-9361552065">+63 9361552065</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📧</span>
                <a href="mailto:sayanaiyub6@gmail.com">sayanaiyub6@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">🌐</span>
                <a href="https://linkedin.com/in/sayn-aiyub-492046963" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="about-right">
            <div className="about-photo">
              <img src={myPhoto} alt="Muhammad Husayn Aiyub" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="contact-section">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">Let's connect and create something amazing together</p>
          <div className="title-accent"></div>
        </div>
        <div className="contact-details">
          <a href="tel:+63-9361552065" className="contact-card">
            <div className="contact-card-icon">📞</div>
            <div className="contact-card-content">
              <h4 className="contact-card-label">Phone</h4>
              <p className="contact-card-value">+63 9361552065</p>
            </div>
            <div className="contact-card-arrow">→</div>
          </a>
          <a href="mailto:sayanaiyub6@gmail.com" className="contact-card">
            <div className="contact-card-icon">📧</div>
            <div className="contact-card-content">
              <h4 className="contact-card-label">Email</h4>
              <p className="contact-card-value">sayanaiyub6@gmail.com</p>
            </div>
            <div className="contact-card-arrow">→</div>
          </a>
          <div className="contact-card">
            <div className="contact-card-icon">📍</div>
            <div className="contact-card-content">
              <h4 className="contact-card-label">Location</h4>
              <p className="contact-card-value">Zamboanga City, Philippines</p>
            </div>
          </div>
          <a href="https://linkedin.com/in/sayn-aiyub-492046963" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon">💼</div>
            <div className="contact-card-content">
              <h4 className="contact-card-label">LinkedIn</h4>
              <p className="contact-card-value">Connect with me</p>
            </div>
            <div className="contact-card-arrow">→</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;