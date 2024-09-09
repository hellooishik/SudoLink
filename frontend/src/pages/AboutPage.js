import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../pages/navbar";

const AboutPage = () => {
  return (
    <div>
      <NavbarComponent />
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <h1>About Us</h1>
        <p>Learn more about SudoLink and our mission.</p>
      </Container>
    </div>
  );
};

export default AboutPage;
