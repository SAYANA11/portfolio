import React, { useState } from "react";
import "./Certificate.css";
import cert1 from "./lrt1.jpg";

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