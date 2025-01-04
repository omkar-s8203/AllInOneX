// src/pages/HomePage/HomePage.js
// import React from "react";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

function HomePage() {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

  // If not authenticated, redirect to login
//   if (!isAuthenticated) {
//     navigate("/login");
//     return null;
//   }

  return (
    <div className="home-page">
      <p>Your one-stop solution for multiple services! Explore our modules:</p>
    </div>
  );
}

export default HomePage;
