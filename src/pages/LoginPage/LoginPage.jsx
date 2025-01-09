import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = emailRegex.test(email)
      ? ""
      : "Please enter a valid email address.";

    // Validate password
    const passwordError =
      password.length >= 6
        ? ""
        : "Password must be at least 6 characters long.";

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({ email: "", password: "" });
      alert("Login successful!");
      // Here you can handle API requests for login
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>

        {/* Create New Account */}
        <p className="create-account">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="create-account-link">
            Create New Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
