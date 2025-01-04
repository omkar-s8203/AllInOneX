import { FaBell, FaMessage, FaPersonRifle, FaSquareMinus, FaThreads } from "react-icons/fa6";
import "./MenuBar.css";
import { FaHome, FaInstagram, FaPlusCircle, FaSafari, FaSearch, FaStudiovinari, FaVideo } from "react-icons/fa";

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
                    <FaHome /> Home
                </span>
                <br />
                <span>
                    <FaSearch /> Search
                </span>
                <br />
                <span>
                    <FaSafari /> Explore
                </span>
                <br />
                <span>
                    <FaVideo /> Reels
                </span>
                <br />
                <span className="message-hover"> 
                    <FaMessage /> Message
                </span>
                <br />
                <span className="notification-hover">
                    <FaBell /> Notification
                </span>
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
