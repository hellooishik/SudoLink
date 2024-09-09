import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ServicesSection = () => {
  return (
    <Container className="services-section my-5">
      <h2 className="text-center mb-5">Our Services</h2>
      <Row>
        <Col md={4}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>Building responsive and scalable websites.</Card.Text>
              <Button variant="primary" href="/services/web-development">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Mobile Apps</Card.Title>
              <Card.Text>Developing custom mobile applications.</Card.Text>
              <Button variant="primary" href="/services/mobile-apps">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Consulting</Card.Title>
              <Card.Text>
                Providing expert software consulting services.
              </Card.Text>
              <Button variant="primary" href="/services/consulting">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesSection;
