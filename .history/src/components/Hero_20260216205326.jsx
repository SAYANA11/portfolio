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
        <div className="about-container">
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-accent"></div>
          </div>
          <div className="about-content">
            <p className="about-text">
              I'm an IT graduate and freelance web developer passionate about building simple, useful web tools and helping teams stay organized. I've developed real-world systems for clients, including project management platforms, compliance tools, and enterprise inventory solutions. I enjoy solving problems, learning new technologies, and supporting teams in virtual work environments.
            </p>
            <div className="about-highlights">
              <div className="highlight-card">
                <span className="highlight-icon">💻</span>
                <h4>Web Development</h4>
                <p>Building responsive and interactive web applications</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">🔧</span>
                <h4>Problem Solving</h4>
                <p>Creating practical solutions for real-world challenges</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">🚀</span>
                <h4>Growth Mindset</h4>
                <p>Continuously learning new technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
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