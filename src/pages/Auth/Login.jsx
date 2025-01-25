import React, { useState } from "react";
import Footer from "./Footer";

const Login = ({ setView }) => {
  // Create state to hold form input values
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // To store any error messages
  const [loading, setLoading] = useState(false);  // To handle loading state

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    // Simple form validation
    if (!loginId || !password) {
      setError("Please enter both login ID and password.");
      return;
    }

    // Reset previous error
    setError("");
    setLoading(true);

    // Prepare data for the API call
    const dataToSend = { loginId, password };
    console.log(dataToSend);
    try {
      const response = await fetch("YOUR_API_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend), // Send data to the server
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect user, show success message)
        const data = await response.json();
        console.log("Login successful:", data);
        // You can redirect the user to the dashboard or another page here
      } else {
        // Handle errors from the API (e.g., incorrect login credentials)
        const errorData = await response.json();
        setError(errorData.message || "Invalid login credentials.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading spinner after API call
    }
  };

  return (
    <>
      {/* Login ID (Email, Username, Mobile Number) */}
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingLoginId"
          placeholder="Email, Username or Mobile Number"
          value={loginId} // Bind the input value to state
          onChange={(e) => setLoginId(e.target.value)} // Update the state on change
        />
        <label htmlFor="floatingLoginId">Email, Username, or Mobile Number</label>
      </div>

      {/* Password Field */}
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password} // Bind the input value to state
          onChange={(e) => setPassword(e.target.value)} // Update the state on change
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      {/* Display Error Message */}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Sign In Button */}
      <button
        className="btn btn-primary w-100 py-2"
        onClick={handleSubmit}
        disabled={loading}  // Disable button while loading
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default Login;
