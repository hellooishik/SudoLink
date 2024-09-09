import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../css/wellcomePage.css"; // Ensure path is correct

const WelcomePage = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center"
    >
      <Row className="mb-4">
        <Col>
          <h1 className="display-4 fw-bold text-primary">
            Welcome to Sudolink!
          </h1>
          <p className="lead text-secondary">
            We're thrilled to have you here.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-success">Explore Features</Card.Title>
              <Card.Text>
                Discover all the amazing features we offer and how they can
                benefit you.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-primary" size="lg" href="/">
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
