import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Button,
  Form,
  Alert,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import NavbarComponent from "../pages/navbar";
import "../css/HomePage.css";
import { login } from "../services/authService";
import ClientLogos from "../components/ClientLogos"; // A new component to show client logos
import Testimonials from "../components/Testimonials"; // A new component for testimonials
import ServicesSection from "../components/ServicesSection"; // A section highlighting services

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validUpperCase, setValidUpperCase] = useState(false);
  const [validSymbol, setValidSymbol] = useState(false);
  const [validNumber, setValidNumber] = useState(false);

  // Function to validate the password against criteria
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    setValidUpperCase(hasUpperCase);
    setValidSymbol(hasSymbol);
    setValidNumber(hasNumber);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    try {
      const data = await login({ email, password });
      localStorage.setItem("token", data.token);
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/welcome";
      }, 1000);
    } catch (error) {
      setLoading(false);
      setError("Invalid email or password.");
    }
  };

  return (
    <div>
      <NavbarComponent />
      <section className="hero-login-section d-flex align-items-center min-vh-100">
        {/* Hero Section */}
        <div className="hero-content d-flex flex-column justify-content-center text-white">
          <Container className="text-center">
            <h1 className="display-3">SudoLink</h1>
            <p className="lead">Crafting cutting-edge software solutions</p>
            <Button variant="primary" size="lg" href="/services">
              Get Started
            </Button>
          </Container>
        </div>
        {/* Login Section */}
        <div className="login-section d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && (
            <Alert variant="success">Login successful! Redirecting...</Alert>
          )}
          <Form onSubmit={handleLogin} className="w-100">
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
            <Button variant="primary" type="submit" className="w-100">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form>
          {/* Sign Up Link */}
          <div className="mt-3 text-center">
            <span>New here? </span>
            <Button variant="link" as={Link} to="/register">
              Sign Up
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials and Client Logos */}
      <Container className="my-5">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <Testimonials />
        <h3 className="text-center my-5">Trusted by</h3>
        <ClientLogos />
      </Container>
    </div>
  );
};

export default HomePage;
