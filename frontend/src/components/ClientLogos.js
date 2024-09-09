import React from "react";
import logo1 from "../logos/logotipo.png"; // Replace with actual path
import logo2 from "../logos/logotipo.png"; // Replace with actual path
import logo3 from "../logos/logotipo.png"; // Replace with actual path
// Add more imports as needed

const ClientLogos = () => {
  const logos = [
    { src: logo1, alt: "Client Logo 1" },
    { src: logo2, alt: "Client Logo 2" },
    { src: logo3, alt: "Client Logo 3" },
    // Add more logos as needed
  ];

  return (
    <div className="client-logos d-flex justify-content-around">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          width="150"
          height="40"
          className="mx-2" // Add margin if needed
        />
      ))}
    </div>
  );
};

export default ClientLogos;
