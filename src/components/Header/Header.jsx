import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

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
            <Link className="nav-link" to="/account">Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item login-signup">
          {/* {!isAuthenticated && (

            <>
              <FaUserAlt />
              <button onClick={login}>Login</button>
              </>
             )} */}
             {isAuthenticated && (
              <a href="#" onClick={logout}> <BiLogOut /></a>
          )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
