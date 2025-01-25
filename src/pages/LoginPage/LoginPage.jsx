import { useContext, useState } from "react";
import "./LoginPage.css";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  // const myNavigation =useNavigate();
  const { login, logout } = useContext(AuthContext);
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
      handleLogin();
      // Here you can handle API requests for login
    }
  };
  const handleLogin = () => {
    console.log("Calling login function...");
    const tempUser = {"id":1,"name":"Super Boss", "username":"admin","email":"admin@example.com","role":"admin"};
    login(JSON.stringify(tempUser));// This will call the login function in AuthProvider
  };

  const handleLogout = () => {
    console.log("Calling logout function...");
    logout(); // This will call the logout function in AuthProvider
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div>
          {/* below are the bypass login and logout button use when need */}
          {/* <button onClick={handleLogin}>Login</button> */}          
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
        <h1>Login Page</h1>
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
        <a href="#" onClick={handleLogin}><br/>ByPass  </a>
      </div>
    </div>
  );
}

export default LoginPage;
