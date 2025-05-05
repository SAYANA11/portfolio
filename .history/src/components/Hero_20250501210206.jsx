import React, { useState } from "react";
import myPhoto from "./sayana.jpg";
import "./Hero.css";

const Hero = ({ works }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setCurrentImageIndex(0); // Reset to the first image
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    const images = works[currentIndex].images;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
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
        {works.length === 0 ? (
          <p>No works to display</p>
        ) : (
          works.map((work, index) => (
            <li
              key={index}
              className="work-item"
              onClick={() => openModal(index)}
            >
              <div className="work-container">
                <h4>{work.title}</h4>
                <p>{work.description}</p>
                {work.images && work.images.length > 0 && typeof work.images[0] === "string" && (
                  <img
                    src={work.images[0]} // Use the first image in the array
                    alt={work.title}
                    className="work-image"
                  />
                )}
              </div>
            </li>
          ))
        )}
      </ul>

      {isModalOpen && works.length > 0 && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h4 className="modal-title">{works[currentIndex].title}</h4>
            <p className="modal-description">{works[currentIndex].description}</p>
            {works[currentIndex].images &&
              works[currentIndex].images.length > 0 &&
              typeof works[currentIndex].images[currentImageIndex] === "string" && (
                <div className="modal-image-container">
                  <img
                    src={works[currentIndex].images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="modal-image"
                  />
                  <button onClick={nextImage} className="next-button">
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