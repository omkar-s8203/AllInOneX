import { FaMessage, FaPersonRifle } from "react-icons/fa6";
import "./MenuBar.css";
import { FaHome, FaInstagram, FaPlusCircle, FaVideo } from "react-icons/fa";

function MenuBar({ setView }) {
  return (
    <div className="menu-bar">
      <div>
        <span className="Instagram">
          <FaInstagram className="logoi" /> InstBinsta
        </span>
      </div>

      <div className="menu">
        <span onClick={() => setView("mainContent")} className="menu-item">
          <FaHome /> Posts
        </span>
        <br />
        <span className="menu-item">
          <FaVideo /> Album
        </span>
        <br />
        <span className="menu-item">
          <FaMessage /> Users
        </span>
        <br />
        <span onClick={() => setView("createPost")}  className="menu-item">
          <FaPlusCircle /> Create
        </span>
        <br />
        <span className="menu-item">
          <FaPersonRifle /> Profile
        </span>
        <br />
      </div>

     
    </div>
  );
}

export default MenuBar;
