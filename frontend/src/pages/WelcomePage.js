import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json"; // Import your JSON data here
import SmoothScroll from "smooth-scroll";
import "../css/wellcomePage.css"; // Custom CSS for the wellcome page

// Initialize smooth scroll behavior for anchor links
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const WellcomePage = () => {
  const [landingPageData, setLandingPageData] = useState({});

  // Load the JSON data on component mount
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* Navigation Component */}
      {/* the navigation control will be set to the main part */}
      <Navigation />
      {/* Header Component with dynamic data */}
      <Header data={landingPageData.Header} />

      {/* About Component */}
      <About data={landingPageData.About} />

      {/* Services Component */}
      <Services data={landingPageData.Services} />

      {/* Gallery Component */}
      <Gallery data={landingPageData.Gallery} />

      {/* Team Component */}
      <Team data={landingPageData.Team} />

      {/* Contact Section */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default WellcomePage;
