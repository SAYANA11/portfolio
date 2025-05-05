import React, { useState } from "react";
import myPhoto from "./sayana.jpg";
import image1 from "./rizal1.jpg";
import image1 from "./rizal2.jpg";
import image1 from "./rizal3.jpg";
import image1 from "./rizal4.jpg";
import image1 from "./rizal5.jpg";
import image1 from "./rizal6.jpg";
import image1 from "./rizal7.jpg";
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
      images: [rizal1, rizal2, rizal3, rizal4, rizal5, rizal1, rizal7],
    },
    {
      id: "2",
      title: "Day 2 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [image4, image5, image6],
    },
  ];

  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (workIndex) => {
    setCurrentWorkIndex(workIndex);
    setCurrentImageIndex(0); // Start with the first image
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeMainImage = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
  };

  return (
    <div className="hero-container">
      {/* Header Section */}
      <div className="name">
        <h1 className="hero-title">Aiyub, Muhammad Husayn</h1>
        <p className="hero-subtitle">Bachelor of Science in Information Technology</p>
        <div className="photo">
          <img src={myPhoto} alt="Muhammad Husayn Aiyub" />
        </div>
      </div>

      {/* Gallery Section */}
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

      {/* Modal Section */}
            {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-body">
              {/* Main Image Section */}
              <div className="modal-image-section">
                <img
                  src={works[currentWorkIndex].images[currentImageIndex]}
                  alt={works[currentWorkIndex].title}
                  className="modal-large-image"
                />
                <div className="modal-grid">
                  {works[currentWorkIndex].images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Image ${idx + 1}`}
                      className={`modal-grid-item ${
                        idx === currentImageIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentImageIndex(idx)} // Only update the image index
                    />
                  ))}
                </div>
              </div>
      
              {/* Text Section */}
              <div className="modal-text-section">
                <h4 className="modal-title">{works[currentWorkIndex].title}</h4>
                <p className="modal-description">{works[currentWorkIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;