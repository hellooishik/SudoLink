import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "SudoLink provided excellent software development services!",
      position: "CEO, TechCorp",
    },
    {
      name: "Jane Smith",
      feedback: "The team was highly professional and delivered on time.",
      position: "Manager, WebWorld",
    },
  ];

  return (
    <Row>
      {testimonials.map((testimonial, index) => (
        <Col md={6} key={index}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Text>"{testimonial.feedback}"</Card.Text>
              <Card.Footer>
                <small className="text-muted">
                  - {testimonial.name}, {testimonial.position}
                </small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Testimonials;
