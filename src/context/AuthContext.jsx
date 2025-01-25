import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status when the app loads
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log("user ::", user);

    // Check if the user exists and set authentication accordingly
    if (user && user.id) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); // Explicitly set to false if user is not authenticated
    }
  }, []);

  const login = (val) => {
    // Store user data (or a token) in localStorage
    console.log("You are logged in ::");

    localStorage.setItem("user", val);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove user data (or token) from localStorage
    console.log("You are logged out ::");

    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
