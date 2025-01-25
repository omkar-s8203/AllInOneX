import React, { useState } from "react";
import Footer from "./Footer";

const Signup = ({ setView }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle form data changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one of the fields is filled in
    if (!formData.username && !formData.email && !formData.mobile) {
      setError("At least one of Username, Email, or Mobile is required.");
      return;
    }

    // Reset error message
    setError("");

    // Prepare data as an array (can adjust the format as needed)
    const dataToSend = [
      { field: "username", value: formData.username },
      { field: "email", value: formData.email },
      { field: "mobile", value: formData.mobile },
      { field: "name", value: formData.name },
      { field: "password", value: formData.password },
    ];

    // Log the data for debugging purposes
    console.log("Form submitted with data:", dataToSend);

    // Send data to the API (example using fetch)
    try {
      const response = await fetch("YOUR_API_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData: dataToSend }), // Send data in the array format
      });

      if (response.ok) {
        // Handle successful signup (e.g., show success message, redirect user, etc.)
        console.log("Signup successful!");
      } else {
        // Handle API errors
        const errorData = await response.json();
        console.log("Error from API:", errorData);
      }
    } catch (error) {
      // Handle network or other errors
      console.log("Error during signup:", error);
    }
  };

  return (
    <>
      {/* Name Field */}
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="name">Name</label>
      </div>

      {/* Username Field */}
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
      </div>

      {/* Email Field */}
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
      </div>

      {/* Mobile Field */}
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="mobile"
          placeholder="Enter mobile number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <label htmlFor="mobile">Mobile</label>
      </div>

      {/* Password Field */}
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
      </div>

      {/* Error Message */}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Signup Button */}
      <button className="btn btn-primary w-100 py-2" onClick={handleSubmit}>
        Signup
      </button>
    </>
  );
};

export default Signup;
