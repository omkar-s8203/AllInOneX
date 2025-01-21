import React from "react";

const ProfileCard = ({ profilePicture, username, bio }) => {
  return (
    <div className="d-flex flex-column align-items-center p-3 mb-4 border bg-light rounded">
      <img
        src={profilePicture}
        alt="Profile"
        className="rounded-circle mb-2"
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />
      <h5 className="mb-1">{username}</h5>
      <p className="text-muted text-center">{bio}</p>
    </div>
  );
};

export default ProfileCard;
