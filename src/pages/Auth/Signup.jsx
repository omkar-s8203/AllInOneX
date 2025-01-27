import React, { useState } from "react";
import { signupCall } from "../../services/authService";
import { useAlert } from "../../context/AlertContext";


const Signup = ({ setView }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { showAlert } = useAlert();


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
  
    // Sanitize the form data by removing empty fields
    const sanitizedData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );
  
    // Log the sanitized data for debugging purposes
    console.log("Sanitized form data:", sanitizedData);
  
    try {
      const response = await signupCall(sanitizedData);
      console.log("Signup Successful:", response.data);
  
      if (response.status === 201) {
        // Handle successful signup (e.g., show success message, redirect user, etc.)
        console.log("Signup successful!");
        showAlert(response.data.message, "success");
        setView("login");
      } else {
        // Handle API errors
        console.log("Error from API:", response);
      }
    } catch (error) {
      // Handle network or other errors
      console.log("Error during signup:", error);
      showAlert(error.message || "An error occurred during signup.", "danger");
    }
  };
  

  return (
    <>

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
