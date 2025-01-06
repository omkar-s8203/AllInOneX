import {  FaMessage, FaPersonRifle, FaSquareMinus, FaThreads } from "react-icons/fa6";
import "./MenuBar.css";
import { FaHome, FaInstagram, FaPlusCircle, FaStudiovinari, FaVideo } from "react-icons/fa";

function MenuBar() {
    return (
        <div className="menu-bar">
            <div>
                <span className="Instagram">
                    <FaInstagram className="logoi" /> Instagram
                </span>
            </div>

            <div className="menu">
                <span>
                    <FaHome /> Posts 
                </span>
                <br />
                <span>
                    <FaVideo /> Album
                </span>
                <br />
                <span className="message-hover"> 
                    <FaMessage /> Users
                </span>
                {/* <br /> */}
                {/* <span className="notification-hover">
                    <FaBell /> ToDo 
                </span> */}
                <br />
                <span className="create-hover">
                    <FaPlusCircle /> Create
                </span>
                <br />
                <span className="profile-hover">
                    <FaPersonRifle /> Profile
                </span>
                <br />
            </div>

            <div className="menu-down">
                <br />
                <br />
                <br />
                <br />
                <span><FaStudiovinari/> AI Studio</span>
                <br />
                <span><FaThreads/> Threads</span>
                <br />
                <span className="setting-hover"><FaSquareMinus/> Setting</span>
                <br />
            </div>
        </div>
    );
}

export default MenuBar;
