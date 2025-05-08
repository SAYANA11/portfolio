import React, { useState } from "react";
import "./Certificate.css";

// Import all certificate images
import cert1 from "./cert1.png";
import cert2 from "./cert2.png";
import cert3 from "./cert3.png";
import cert4 from "./cert4.png";
import cert5 from "./cert5.png";
import cert6 from "./cert6.png";
import cert7 from "./cert7.png";
import cert8 from "./cert8.png";
import cert9 from "./cert9.png";
import cert10 from "./cert10.png";
import cert11 from "./cert11.png";



const Certificate = () => {
  const certificates = [
    { id: 1, title: "Certificate 1", image: cert1 },
    { id: 2, title: "Certificate 2", image: cert2 },
    { id: 3, title: "Certificate 3", image: cert3 },
    { id: 4, title: "Certificate 4", image: cert4 },
    { id: 5, title: "Certificate 5", image: cert5 },
    { id: 6, title: "Certificate 6", image: cert6 },
    { id: 7, title: "Certificate 7", image: cert7 },
    { id: 8, title: "Certificate 8", image: cert8 },
    { id: 9, title: "Certificate 9", image: cert9 },
    { id: 10, title: "Certificate 10", image: cert10 },
    { id: 11, title: "Certificate 11", image: cert11 },
  
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certificate-container">
      <h2 className="certificate-title">My Certificates</h2>
      <div className="certificate-grid">
        {visibleCertificates.map((certificate) => (
          <div
            key={certificate.id}
            className="certificate-item"
            onClick={() => openModal(certificate)} // Open modal on click
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />
            <p className="certificate-title">{certificate.title}</p>
          </div>
        ))}
      </div>
      <button
        className="see-more-button"
        onClick={() => setShowAll(!showAll)} // Toggle the state
      >
        {showAll ? "Hide" : "See More"} {/* Change button text dynamically */}
      </button>

      {/* Modal */}
      {selectedCertificate && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="modal-image"
            />
            <h3 className="modal-title">{selectedCertificate.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;