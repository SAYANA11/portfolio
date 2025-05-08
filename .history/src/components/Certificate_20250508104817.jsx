import React, { useState } from "react";
import "./Certificate.css";

// Import all certificate images
import cert1 from "./lrt1.jpg";


const Certificate = () => {
  const certificates = [
    { id: 1, title: "Certificate 1", image: cert1 },
    { id: 2, title: "Certificate 1", image: cert1 },
    { id: 3, title: "Certificate 1", image: cert1 },
    { id: 4, title: "Certificate 1", image: cert1 },
    { id: 5, title: "Certificate 1", image: cert1 },
    { id: 6, title: "Certificate 1", image: cert1 },
    { id: 7, title: "Certificate 1", image: cert1 },
    { id: 8, title: "Certificate 1", image: cert1 },
    { id: 9, title: "Certificate 1", image: cert1 },
    { id: 10, title: "Certificate 1", image: cert1 },
    { id: 11, title: "Certificate 1", image: cert1 },
  
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