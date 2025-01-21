import React from "react";
import ProfileCard from "./ProfileCard";
import "./Account.css";

const Sidebar = ({ onSelectProfile }) => {
  const profileOptions = ["Address", "Settings", "Orders", "Notifications"];

  const profileData = {
    profilePicture: "https://via.placeholder.com/80",
    username: "John Doe",
    bio: "Web developer and tech enthusiast.",
  };

  return (
    <div className="sidebar">
      <div className="p-3 border bg-light">
        {/* Profile Card */}
        <ProfileCard
          profilePicture={profileData.profilePicture}
          username={profileData.username}
          bio={profileData.bio}
        />

        {/* Menu */}
        <h4>Menu</h4>
        <ul className="list-group">
          {profileOptions.map((option) => (
            <li
              key={option}
              className="list-group-item list-group-item-action"
              onClick={() => onSelectProfile(option)}
              style={{ cursor: "pointer" }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
