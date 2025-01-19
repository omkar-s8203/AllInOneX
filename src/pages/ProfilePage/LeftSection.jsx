import React, { useState } from "react";
import profile from "./profile.jpg";
import profileData from "./profile";

export default function () {
  const [selected, setSelected] = useState("Address");
  const handleToggle = (section) => {
    setSelected(section);
  };

  // console.log("pdata", profileData[0].profile_type);
  return (
    <div className="">
      <div className="">
        <img className="" src={profile} style={{ width: "400px" }} />
      </div>

      <div className=" mt-5  ">
        <p className="text-muted border-bottom text-center">Work</p>
        <div className="">
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

      <div className=" mt-5  ">
        <p className="text-muted border-bottom text-center">skills</p>
        <div className="">
          <ul>
            {profileData.map((profile_key, index) => {
              // console.log("index::", index);
              console.log(profile_key);
              return (
                <>
                  <li key={index} onClick={() => handleToggle("section")}>
                    {profile_key.profile_type}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
