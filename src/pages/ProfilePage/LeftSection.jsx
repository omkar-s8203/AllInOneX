import React, { useState } from "react";
import profile from "./profile.jpg";
import profileData from "./profile";

export default function LeftSection() {
  const [selected, setSelected] = useState("Address");
  const handleToggle = (section) => {
    setSelected(section);
  };

  return (
    <div>
      <div>
        <img src={profile} style={{ width: "400px" }} alt="Profile" />
      </div>

      <div className="mt-5">
        <p className="text-muted border-bottom text-center">Work</p>
        <div>
          <h4>Spotify New York</h4>
          <p className="text-muted">
            Megapolis Symphony, Phase 3, <br />
            Hinjewadi Pune, 057411
          </p>
        </div>

        <div className="mt-4">
          <h4>Spotify New York</h4>
          <p className="text-muted">
            Megapolis Symphony, Phase 3, <br />
            Hinjewadi Pune, 057411
          </p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-muted border-bottom text-center">Skills</p>
        <div>
          <ul>
            {profileData.map((profile_key) => {
              console.log(profile_key);
              return (
                <li
                  key={profile_key.profile_type} // Use profile_type as the unique key
                  onClick={() => handleToggle(profile_key.profile_type)}
                >
                  {profile_key.profile_type}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
