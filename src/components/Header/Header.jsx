// src/components/Header/Header.jsx

import { Link } from "react-router-dom";
import './Header.css'; // To style the header

function Header() {
  return (
    <header className="header">
      <h1 className="logo">AllInOneX</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogging">Blogging</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/weather">Weather</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;