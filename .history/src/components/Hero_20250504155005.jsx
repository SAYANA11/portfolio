import React, { useState } from "react";
import myPhoto from "./sayana.jpg";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import "./Hero.css";

const Hero = () => {
  const works = [
    {
      id: "1",
      title: "Day 1 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [image1, image2, image3],
    },
    {
      id: "2",
      title: "Day 2 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [image4, image5, image6],
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
        <h1 className="hero-title">Aiyub, Muhammad Husayn</h1>
        <p className="hero-subtitle">Bachelor of Science in Information Technology</p>
        <div className="photo">
          <img src={myPhoto} alt="Muhammad Husayn Aiyub" />
        </div>
      </div>
      <div className="works-header">
        <h3 className="works-title">Gallery</h3>
        <div className="works-divider"></div>
      </div>
      <ul className="works-list">
        {works.map((work, index) => (
          <li
            key={work.id}
            className="work-item"
            onClick={() => openModal(index)}
          >
            <div className="work-container">
              <h4 className="work-title">{work.title}</h4>
              <img
                src={work.images[0]}
                alt={work.title}
                className="work-image"
              />
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
            <div className="modal-image-section">
              <img
                src={works[currentIndex].images[0]} // Main image
                alt={works[currentIndex].title}
                className="modal-large-image"
              />
              <div className="modal-grid">
                {works[currentIndex].images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Image ${idx + 1}`}
                    className="modal-grid-item"
                    onClick={() => setCurrentIndex(idx)} // Change main image on click
                  />
                ))}
              </div>
            </div>
            <div className="modal-text-section">
              <h4 className="modal-title">{works[currentIndex].title}</h4>
              <p className="modal-description">{works[currentIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;