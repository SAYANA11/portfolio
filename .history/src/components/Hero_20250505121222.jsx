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
import bag1 from "./bag1.jpg";
import bag2 from "./bag2.jpg";
import bag3 from "./bag3.jpg";
import bag4 from "./bag4.jpg";
import bag5 from "./bag5.jpg";
import bag6 from "./bag6.jpg";
import bgc1 from "./bgc1.jpg";
import bgc2 from "./bgc2.jpg";
import bgc3 from "./bgc3.jpg";
import bgc4 from "./bgc4.jpg";
import bgc5 from "./bgc5.jpg";

import "./Hero.css";

const Hero = () => {
  const works = [
    {
      id: "1",
      title: "Day 1: Rizal Park Tour",
      description:
        "Our first day began in Manila's heart, where we delved into Philippine history at Rizal Park. Today marked the start of our journey, and what better way to begin than with a visit to Manila's iconic Rizal Park?\n\nApproaching the Rizal Monument, the sky painted a dramatic scene with soft clouds drifting overhead, enhancing the solemn atmosphere. The monument stood tall and proud, a timeless tribute to Dr. José Rizal, the nation's revered hero. Guards stood at attention as Philippine flags gently waved around the plaza, a moment of deep reverence and national pride.\n\nFrom there, we proceeded to Fort Santiago, one of Manila's oldest fortresses. The towering stone gate welcomed us with intricate carvings, exuding an aura of ancient strength. Stepping through its arched entrance felt like entering another era, imagining the footsteps of those who walked these cobbled paths, including Rizal during his final days of imprisonment here.\n\nInside the fort, we explored a poignant area—a dimly lit tunnel adorned with sculptures depicting Filipino prisoners during wartime. These life-sized statues vividly portrayed their struggle and sacrifice, forging a profound emotional connection to the nation's history. It was a haunting yet deeply moving experience, a testament to the enduring spirit of the Filipino people.",
      images: [rizal1, rizal2, rizal3, rizal4, rizal5, rizal6, rizal7],
    }
    ,
    {
      id: "2",
      title: "Day 2: Subic Bay Exploration",
      description:
        "On our second day, we explored the Subic Bay Exhibition & Convention Center (SBECC)—a space where modern facilities meet a deep cultural legacy. Inside, we were captivated by a collection of historical paintings that vividly portrayed the Philippines’ journey through time. These artworks depicted everything from colonial oppression to revolutionary uprisings, offering a rich, visual timeline of the Filipino spirit across different eras—from the Spanish regime to American influence.\n\nWe then visited the SBMA Law Enforcement Department – Communication Branch, where we got a behind-the-scenes look at how their security operations function. It was fascinating to see how advanced communication technologies are used to coordinate law enforcement efforts throughout the Freeport Zone, maintaining safety and order with remarkable precision.\n\nOur next stop was the SBMA Seaport Department’s Vessel Traffic Management System (VTMS). There, we observed how maritime traffic is monitored and directed, ensuring the safe navigation of ships through the busy waters of Subic Bay. It was eye-opening to understand how essential this system is for both local trade and global shipping activity.\n\nJust beyond the facility, we were greeted with a panoramic view of Subic Bay—once a strategic U.S. Naval Base, now a thriving symbol of change. This area has transformed into a Filipino-led hub where American-built infrastructure harmonizes with local culture. The scene—framed by mountains, a bustling port, and clear blue skies—offered a serene yet powerful close to our day.",
      images: [subic1, subic2, subic3, subic4, subic5],
    },
    {
      id: "3",
      title: "Day 3: Natural History & Presidential Legacy",
      description:
        "Our third day in Metro Manila was a fascinating journey through the Philippines' natural heritage and presidential history. We explored the National Museum of Natural History, the Museo ni Manuel Quezon, and the Presidential Car Museum—each stop offering a unique perspective on the nation's past.\n\nWe began at the National Museum of Natural History, located in a beautifully restored neoclassical building in Manila. The museum showcases the country’s diverse natural environments, from lush forests to marine ecosystems. Highlights included detailed exhibits on native wildlife and a striking life-sized replica of Lolong—the largest crocodile ever held in captivity—which left a lasting impression of nature’s immense scale and diversity.\n\nNext, we made our way to the Museo ni Manuel Quezon at the base of the Quezon Memorial Shrine in Quezon City. Dedicated to President Manuel L. Quezon, the museum offers a close look at his life and leadership as the first President of the Philippine Commonwealth. Artifacts, personal effects, and historical documents shed light on his legacy, while the mausoleum, which holds the remains of President Quezon and his wife Aurora Aragon Quezon, provides a quiet space for remembrance.\n\nOur final visit of the day took us to the Presidential Car Museum, also within the Quezon Memorial Circle. Opened in 2018, this museum features a collection of official vehicles used by Philippine Presidents over the decades. Notable exhibits included the 1937 Chrysler Airflow Custom Imperial CW Limousine used by President Quezon and the 1924 Packard Single Six Touring car driven by President Emilio Aguinaldo. Each vehicle served as a time capsule, reflecting the evolving history, culture, and technology of the nation’s leadership.",
      images: [m1, m2, m3, m4, m5, m6],
    }
    ,
    {
      id: "4",
      title: "Day 4: Bangko Sentral & Hytec Visit",
      description:
        "On our fourth day, we visited the Bangko Sentral ng Pilipinas (BSP)—the country's central monetary authority. Although photography wasn’t allowed inside, the experience was nonetheless fascinating. We were given an exclusive tour of the facility, where we learned about the intricate process of currency production. From the design phase to the printing and security features, it was eye-opening to see how our money is carefully and securely made. The staff explained how BSP ensures the stability and integrity of the Philippine peso, and it gave us a new appreciation for the value and effort behind every bill and coin we use.\n\nLater in the day, we headed to Hytec Power Inc., a specialized training facility that partners with educational institutions to prepare students for careers in industrial technology and engineering. The facility was filled with cutting-edge equipment—everything from automation systems and circuit boards to advanced machinery used for hands-on training. One of the highlights was seeing their robotics division, where students design, build, and program robots for national and even international competitions. Their passion and innovation were truly inspiring.\n\nIt was a day full of discovery—from understanding how money is made and protected, to witnessing how young minds are being equipped to shape the future through science and technology. Despite not being able to take photos at BSP, the memories and insights we gained made Day 4 both enriching and unforgettable.",
      images: [hytec1, hytec2, hytec3, hytec4, hytec5],
    }
    ,
    {
      id: "5",
      title: "Day 5: LRT Tour & Operations Insight",
      description:
        "On our fifth day, we had the opportunity to explore one of Metro Manila’s key transportation systems—the LRT (Light Rail Transit). Our day began with a ride on the train itself, offering us a firsthand experience of how thousands of commuters travel through the city every day. It was both exciting and insightful to see how the system operates from a passenger's perspective.\n\nAfter our ride, we were given a behind-the-scenes tour of the LRT’s operations center and maintenance workshop. Here, we learned what happens when a train needs repairs or routine maintenance. Engineers and technicians walked us through the various processes involved in diagnosing and fixing issues—from mechanical inspections to electronic troubleshooting.\n\nOne of the most fascinating parts of the tour was seeing the train tracking system—a large screen displaying a real-time map of train locations, routes, and operational statuses. We were shown how they monitor train performance, detect delays or malfunctions, and coordinate quick responses to ensure passenger safety and efficiency.\n\nThe staff generously shared their experiences working in public transportation, including the types of jobs available, the skills required, and even information about salaries and career growth in the rail industry. Their stories gave us a deeper appreciation for the people who work tirelessly behind the scenes to keep the city moving.\n\nOverall, Day 5 gave us a new perspective on urban transit—beyond simply riding the train, we got to understand the complex network of systems and dedicated professionals that keep everything running smoothly.",
      images: [lrt1, lrt2, lrt3, lrt4, lrt5, lrt7, lrt8],
    }
    ,
    {
      id: "6",
      title: "Day 6: Baguio Adventure",
      description:
        "Day 6 was hands-down the most memorable day of our entire tour—we went to Baguio! Known as the Summer Capital of the Philippines, the cool weather and scenic views made this day unforgettable from start to finish.\n\nOur first destination was the Strawberry Farm in La Trinidad, Benguet. The wide-open fields surrounded by mountains were a breathtaking sight. We tried the famous strawberry taho, which many were excited about—though personally, I found it a bit overrated (ube still wins in my book!). We also had the chance to buy fresh strawberries and local delicacies from nearby stalls, adding a delicious local flavor to the trip.\n\nAfter settling into our hotel, we visited the Philippine Military Academy (PMA). Although the cadets were occupied with their routines and we didn’t get to interact with them, we still enjoyed walking around the campus. The crisp mountain air and beautiful landscapes made it a peaceful and refreshing stop. Some areas had restrictions on photography, but there were still plenty of picturesque spots to explore and capture memories.\n\nTo end the day, we stopped by SM Baguio—a unique experience since it’s one of the few malls in the country that operates without air conditioning, thanks to the naturally cool climate. Walking around the open-air design of the mall while enjoying the chilly breeze was a nice contrast to what we're used to in the city.\n\nOverall, Day 6 was the highlight of our tour—a perfect mix of nature, culture, and relaxation in the cool, beautiful mountains of Baguio.",
      images: [bag1, bag2, bag3, bag4, bag5, bag6],
    }
    ,
    {
      id: "7",
      title: "Day 2 Rizal Park Tour",
      description:
        "This photo captures a memorable moment during our visit to Rizal Park, one of the most historic and symbolic landmarks in the Philippines.",
      images: [bgc1, bgc2, bgc3, bgc4, bgc5],
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