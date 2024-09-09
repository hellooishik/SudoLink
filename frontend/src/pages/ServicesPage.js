import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../pages/navbar";
import "../css/ServicesPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ServicesPage = () => {
  return (
    <div>
      <NavbarComponent />
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <h1>Our Services</h1>
        <p>Discover the services we offer at SudoLink.</p>
      </Container>
    </div>
  );
};

export default ServicesPage;
