import React, { useState } from "react";
import Footer from "./Footer";
import { login } from "../../services/authService";

const Login = ({ setView }) => {
  // Create state to hold form input values
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store any error messages
  const [loading, setLoading] = useState(false); // To handle loading state

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    // Simple form validation
    if (!loginId || !password) {
      setError("Please enter both login ID and password.");
      return;
    }
    setLoading(true);
    try {
        const response = await login(loginId, password);  // Call the login API
        
        if (response.status === 200 && response.data.message === 'Login successful') {
            console.log("Login successful:", response.data);
            // Handle successful login (e.g., save token, redirect user)
        } else {
            setError(response.data.message || 'Login failed');
        }
    } catch (err) {
        console.error("Login error:", err.response.data.error);
        setError(err.response.data.error);
    } finally {
        setLoading(false); // Stop loading spinner
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
        <label htmlFor="floatingLoginId">
          Email, Username, or Mobile Number
        </label>
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
        disabled={loading} // Disable button while loading
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

    </>
  );
};

export default Login;
