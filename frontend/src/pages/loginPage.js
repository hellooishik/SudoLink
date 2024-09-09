import React, { useState } from "react";
import { Button, Container, Form, Alert, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "../pages/navbar"; // Adjust the path based on your file structure
import { login } from "../services/authService"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await login({ email, password });
      localStorage.setItem("token", data.token);
      navigate("/welcome");
    } catch (error) {
      setError("Invalid email or password.");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <NavbarComponent />
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <Row className="text-center">
          <Col md={6} lg={4}>
            <h1 className="mb-4">Login to SudoLink</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              {error && <Alert variant="danger">{error}</Alert>}
              <Button variant="primary" type="submit" className="w-100 mb-3">
                Login
              </Button>
              <Button variant="link" className="w-100" as={Link} to="/register">
                Need an account? Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
