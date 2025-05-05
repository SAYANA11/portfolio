import React, { useState } from "react";
import myPhoto from "./sayana.jpg";
import rizal1 from "./rizal1.jpg";
import rizal2 from "./rizal2.jpg";
import rizal3 from "./rizal3.jpg";
import rizal4 from "./rizal4.jpg";
import rizal5 from "./rizal5.jpg";
import rizal6 from "./rizal6.jpg";
import rizal7 from "./rizal7.jpg";
import subic1 from "./subic1.jpg";
import subic2 from "./subic2.jpg";
import subic3 from "./subic3.jpg";
import subic4 from "./subic4.jpg";
import subic5 from "./subic5.jpg";
import m1 from "./museum1.jpg";
import m2 from "./museum2.jpg";
import m3 from "./museum3.jpg";
import m4 from "./museum4.jpg";
import m5 from "./museum5.jpg";
import m6 from "./museum6.jpg";
import h1 from "./hytec1.jpg";
import h2 from "./hytec2.jpg";
import h3 from "./hytec3.jpg";
import h4 from "./hytec4.jpg";
import lrt1 from "./lrt1.jpg";
import lrt2 from "./lrt2.jpg";
import lrt3 from "./lrt3.jpg";
import lrt4 from "./lrt4.jpg";
import lrt5 from "./lrt5.jpg";
import lrt7 from "./mmda1.jpg";
import lrt8 from "./mmda2.jpg";
import "./Hero.css";

const Hero = () => {
  const works = [
    {
      id: "1",
      title: "Day 1 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [rizal1, rizal2, rizal3, rizal4, rizal5, rizal6, rizal7],
    },
    {
      id: "2",
      title: "Day 2 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [subic1, subic2, subic3, subic4, subic5],
    },
    {
      id: "3",
      title: "Day 2 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [m1, m2, m3, m4, m5, m6],
    },
    {
      id: "4",
      title: "Day 2 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [h1, h2, h3, h4],
    },
    {
      id: "5",
      title: "Day 2 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [lrt1, lrt2, lrt3, lrt4, lrt5, lrt7, lrt8],
    },
    {
      id: "6",
      title: "Day 2 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [bag1, bag2, bag3, bag4, bag5, bag6, bag7],
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