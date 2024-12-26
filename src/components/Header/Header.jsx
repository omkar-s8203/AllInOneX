// src/components/Header/Header.jsx

import { Link } from "react-router-dom";
import './Header.css'; // To style the header

function Header() {
  return (
    <header className="header">
      <h1>AllInOneX</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogging">Blogging</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
