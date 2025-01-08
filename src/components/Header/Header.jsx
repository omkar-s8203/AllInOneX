import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons
import { useState } from "react"; // Import useState hook
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">AllInOneX</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Show close or hamburger icon */}
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/insta">Insta</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">News</Link>
          </li>
          <li className="nav-item login-signup">
            <Link className="nav-link" to="/login">
              <FaUserAlt />
              Login / Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
