import React, { useState } from "react";
import myPhoto from "./sayana.jpg";
import image1 from "./image1.jpg"; // Import your images
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

import "./Hero.css";

const Hero = () => {
  // Hardcoded works data with imported images
  const works = [
    {
      id: "1",
      title: "Day 1 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [image1, image2, image3], // Multiple images for modal
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            key={work.id}
            className="work-item"
            onClick={() => openModal(index)}
          >
            <div className="work-container">
              <img
                src={work.images[0]} // Display only the first image
                alt={work.title}
                className="work-image"
              />
              <h4 className="work-title">{work.title}</h4>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h4 className="modal-title">{works[currentIndex].title}</h4>
            <p className="modal-description">
              {works[currentIndex].description}
            </p>
            <div className="modal-images">
              {works[currentIndex].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Image ${idx + 1}`}
                  className="modal-image"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;