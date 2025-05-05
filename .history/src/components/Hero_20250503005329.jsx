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
      description: "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines. In this image, I’m pointing toward the Rizal Monument, an important national landmark. We explored key areas around the park, including the Philippine flag, the replica of the prison cell, and other sites that highlight the country's rich history and heritage. It was an educational and eye-opening experience that brought us closer to understanding our past.",
      images: [image1], // Use imported image
    },
    {
      id: "2",
      title: "Project 2",
      description: "Description of Project 2",
      images: [image2], // Use imported image
    },
    {
      id: "3",
      title: "Project 3",
      description: "Description of Project 3",
      images: [image3], // Use imported image
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    const images = works[currentIndex].images;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
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
              key={work.id}
              className="work-item"
              onClick={() => openModal(index)}
            >
              <div className="work-container">
                <h4>{work.title}</h4>
                <p>{work.description}</p>
                {work.images && work.images.length > 0 && (
                  <img
                    src={work.images[0]}
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
              works[currentIndex].images.length > 0 && (
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