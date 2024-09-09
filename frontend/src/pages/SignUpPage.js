import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService"; // Make sure the path is correct
import { Button, Form } from "react-bootstrap";
import "../css/SignUpPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register({ email, password, age, phone });
      console.log("Registration successful:", data);
      navigate("/welcome");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <h1 className="text-center mb-4">Sign Up</h1>
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
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
        <Button
          variant="link"
          onClick={() => navigate("/")}
          className="w-100 mt-3"
        >
          Already have an account? Login
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
