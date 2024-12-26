// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Create Context
const AuthContext = createContext();

// AuthProvider component to wrap the app and provide the context
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (username, password) => {
    // Here you can add more complex authentication logic, e.g., API call
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      navigate("/"); // Navigate to Home Page on successful login
    } else {
      alert("Invalid login credentials!");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page when logged out
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use authentication context
export function useAuth() {
  return useContext(AuthContext);
}
