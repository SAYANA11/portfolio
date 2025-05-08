import React, { useState } from "react";
import "./Certificate.css";

const Certificate = () => {
  const certificates = [
    { id: 1, title: "Certificate 1", image: "./rizal1.png" },
    { id: 2, title: "Certificate 2", image: "./cert2.jpg" },
    { id: 3, title: "Certificate 3", image: "./cert3.jpg" },
    { id: 4, title: "Certificate 4", image: "./cert4.jpg" },
    { id: 5, title: "Certificate 5", image: "./cert5.jpg" },
    { id: 6, title: "Certificate 6", image: "./cert6.jpg" },
    { id: 7, title: "Certificate 7", image: "./cert7.jpg" },
    { id: 8, title: "Certificate 8", image: "./cert8.jpg" },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <div className="certificate-container">
      <h2 className="certificate-title">My Certificates</h2>
      <div className="certificate-grid">
        {visibleCertificates.map((certificate) => (
          <div key={certificate.id} className="certificate-item">
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
    </div>
  );
};

export default Certificate;