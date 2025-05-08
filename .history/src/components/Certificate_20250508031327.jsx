import React, { useState } from "react";
import "./Certificate.css";

// Import all certificate images
import cert1 from "./lrt1.jpg";


const Certificate = () => {
  const certificates = [
    { id: 1, title: "Certificate 1", image: cert1 },
   
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