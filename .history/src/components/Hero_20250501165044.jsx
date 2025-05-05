import React, { useState } from "react";
import myPhoto from "./sayana.jpg";
import "./Hero.css";

const Hero = ({ works }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextWork = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  return (
    <div className="hero-container">
      <div className="name">
        <h1>Aiyub, Muhammad Husayn</h1>
        <p>Bachelor of Science in Information Technology</p>
        <div className="photo">
          <img src={myPhoto} alt="Muhammad Husayn Aiyub" />
        </div>
      </div>
      <h3>My Works</h3>
      <ul className="works-list">
        {works.map((work, index) => (
          <li
            key={index}
            className="work-item"
            onClick={() => openModal(index)}
          >
            <div className="work-container">
              <h4>{work.title}</h4>
              <p>{work.description}</p>
              {work.image && (
                <img
                  src={URL.createObjectURL(work.image)}
                  alt={work.title}
                  className="work-image"
                />
              )}
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && works.length > 0 && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h4 className="modal-title">{works[currentIndex].title}</h4>
            <p className="modal-description">{works[currentIndex].description}</p>
            {works[currentIndex].image && (
              <div className="modal-image-container">
                <img
                  src={URL.createObjectURL(works[currentIndex].image)}
                  alt={works[currentIndex].title}
                  className="modal-image"
                />
                <button onClick={nextWork} className="next-button">
                  &gt;
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;