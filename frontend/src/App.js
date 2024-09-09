import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { login, register } from "./services/authService";
import WelcomePage from "./pages/WelcomePage";

const AuthForm = ({ isLogin, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const data = await login({ email, password });
        localStorage.setItem("token", data.token); // Save token
        navigate("/welcome"); // Redirect to WelcomePage on success
      } else {
        const data = await register({ email, password });
        console.log("Registration successful:", data);
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button onClick={onSwitch}>
        Switch to {isLogin ? "Register" : "Login"}
      </button>
    </div>
  );
};

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthForm isLogin={isLogin} onSwitch={() => setIsLogin(!isLogin)} />
          }
        />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
