import React, { useState } from "react";
import { forgotPasswordCall } from '../../services/authService';

const ForgotPassword = ({ setView }) => {
  // State to store email input
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Handle email input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is provided
    if (!email) {
      setError("Email is required.");
      return;
    }

    // Reset error message
    setError("");

    // Prepare data as an array (can adjust the format as needed)
    const dataToSend = [
      { field: "email", value: email },
    ];

    // Log the data for debugging purposes
    console.log("Form submitted with data:", dataToSend);

    // Send data to the API (example using fetch)
    try {
      // const response = await fetch("YOUR_API_URL_HERE", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ formData: dataToSend }), // Send data in the array format
      // });
      const response = await forgotPasswordCall(email);

      if (response.ok) {
        // Handle successful password reset (e.g., show success message)
        console.log("Password reset email sent!");
      } else {
        // Handle API errors
        const errorData = await response.json();
        console.log("Error from API:", errorData);
      }
    } catch (error) {
      // Handle network or other errors
      console.log("Error during password reset:", error);
    }
  };

  return (
    <>
      {/* Email Field */}
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="Enter email"
          value={email} // Bind the input value to state
          onChange={handleChange} // Update the state on change
        />
        <label htmlFor="floatingEmail">Email</label>
      </div>

      {/* Error Message */}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Reset Password Button */}
      <button className="btn btn-primary w-100 py-2" onClick={handleSubmit}>
        Reset Password
      </button>
    </>
  );
};

export default ForgotPassword;
