// src/pages/LoginPage/LoginPage.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
//   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password); // Call the login function from AuthContext
  };

  return (
    <div className="login-page">
      <h2>Login to AllInOneX</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
