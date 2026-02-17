import React from "react";
import myPhoto from "./sayana.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* About Me Section - Modern Layout */}
      <div className="about-section">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-accent"></div>
        </div>
        
        <div className="about-layout">
          {/* Left Column */}
          <div className="about-left">
            <div className="about-content-card">
              <h3 className="about-name">Muhammad Husayn A. Aiyub</h3>
              <p className="about-subtitle">Bachelor of Science in Information Technology</p>
              
              <p className="about-text">
                I'm an IT graduate and freelance web developer passionate about building simple, useful web tools and helping teams stay organized. I've developed real-world systems for clients, including project management platforms, compliance tools, and enterprise inventory solutions. I enjoy solving problems, learning new technologies, and supporting teams in virtual work environments.
              </p>

              {/* Contact Info with Cards */}
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-info-icon">📍</span>
                  </div>
                  <div>
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Zamboanga City, Philippines</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-info-icon">📞</span>
                  </div>
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href="tel:+63-9361552065">+63 9361552065</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-info-icon">📧</span>
                  </div>
                  <div>
                    <p className="contact-label">Email</p>
                    <a href="mailto:sayanaiyub6@gmail.com">sayanaiyub6@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-info-icon">🌐</span>
                  </div>
                  <div>
                    <p className="contact-label">LinkedIn</p>
                    <a href="https://linkedin.com/in/sayn-aiyub-492046963" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <span className="contact-info-icon">f</span>
                  </div>
                  <div>
                    <p className="contact-label">Facebook</p>
                    <a href="https://www.facebook.com/muhammadhusayn.aiyub/" target="_blank" rel="noopener noreferrer">Facebook Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="about-right">
            <div className="about-photo-wrapper">
              <div className="about-photo-container">
                <div className="photo-glow"></div>
                <div className="about-photo">
                  <img src={myPhoto} alt="Muhammad Husayn Aiyub" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;