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
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm an IT graduate and freelance web developer passionate about building simple, useful web tools and helping teams stay organized. I've developed real-world systems for clients, including project management platforms, compliance tools, and enterprise inventory solutions. I enjoy solving problems, learning new technologies, and supporting teams in virtual work environments.
        </p>
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