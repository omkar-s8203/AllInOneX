import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import profileData from "./profile"; // Assuming profileData is imported correctly

export default function RightBottomSection() {
  const [activeSelection, setActiveSelection] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleToggle = (profile) => {
    setActiveSelection(profile.profile_type); // Set active profile type
    setSelectedProfile(profile); // Set selected profile data
  };

  return (
    <>
      <div className="mt-5 row border-bottom text-center">
        <div className="col text-muted">
          <FontAwesomeIcon icon={faAddressBook} size="lg" />
          <p className="text-muted">Profiles</p>
        </div>
        <div className="col-12">
          <ul className="row" style={{ listStyleType: "none", padding: 0 }}>
            {profileData.map((profile, index) => (
              <li
                className="col-4 mb-3"
                key={index}
                onClick={() => handleToggle(profile)}
                style={{ cursor: "pointer", fontWeight: activeSelection === profile.profile_type ? "bold" : "normal" }}
              >
                <div className={`profile-type ${activeSelection === profile.profile_type ? 'active' : ''}`}>
                  {profile.profile_type}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Display selected profile data */}
      {selectedProfile && (
        <div className="profile-details mt-4">
          <h4 className="mb-4" style={{ color: "#007BFF" }}>{selectedProfile.profile_type} Profile</h4>

          <div className="row">
            {Object.keys(selectedProfile.data).map((key, index) => {
              const value = selectedProfile.data[key];
              return (
                <div key={index} className="col-12 col-md-6 mb-4">
                  <div className="profile-card p-3 border rounded">
                    <strong>{key}:</strong>
                    {/* Check if the value is an object */}
                    {typeof value === "object" ? (
                      <div className="ml-3">
                        {Object.keys(value).map((nestedKey, nestedIndex) => (
                          <div key={nestedIndex}>
                            <strong>{nestedKey}:</strong>
                            <p>{value[nestedKey]}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Otherwise, render the value directly (for strings, numbers, etc.)
                      <p>{Array.isArray(value) ? value.join(", ") : value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
