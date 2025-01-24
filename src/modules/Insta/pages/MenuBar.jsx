import { FaMessage, FaPersonRifle, FaSquareMinus, FaThreads } from "react-icons/fa6";
import "./MenuBar.css";
import { FaHome, FaInstagram, FaPlusCircle, FaStudiovinari, FaVideo } from "react-icons/fa";

function MenuBar({ setView }) {
  return (
    <div className="menu-bar">
      <div>
        <span className="Instagram">
          <FaInstagram className="logoi" /> Instagram
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

      <div className="menu-down">
        <br />
        <br />
        <br />
        <br />
        <span className="menu-item">
          <FaStudiovinari /> AI Studio
        </span>
        <br />
        <span className="menu-item">
          <FaThreads /> Threads
        </span>
        <br />
        <span className="menu-item">
          <FaSquareMinus /> Setting
        </span>
        <br />
      </div>
    </div>
  );
}

export default MenuBar;
