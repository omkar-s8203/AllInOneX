import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">AllInOneX</h1>
      </div>
      <nav>
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
