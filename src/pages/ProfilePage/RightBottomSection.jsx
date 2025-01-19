import { faAddressBook, faTimeline } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import profileData from "./profile";

export default function RightBottomSection() {
  const [activeSelction, setActiveSelection] = useState("timeline");
  const handleToggle = (section) => {
    setActiveSelection(section);
  };
  return (
    <>
      <div className=" mt-5 row  border-bottom text-center">
        <div className=" text-muted" onClick={() => handleToggle("timeline")}>
          <FontAwesomeIcon icon={faTimeline} />{" "}
          <p  className="text-muted">
            Timeline
          </p>
        </div>
        <div className=" " onClick={() => handleToggle("about")}>
          <FontAwesomeIcon icon={faAddressBook} />{" "}
          <p  className="text-muted">
            About
          </p>
        </div>
        <div className=" ">
          <ul className="row" style={{ listStyleType: "none", padding: 0 }}>
            {profileData.map((profile_key, index) => {
              
              return (
                <>
                  <li className="col" key={index} onClick={()=>{profile_key.profile_type}} >
                    {profile_key.profile_type}
                  </li>
                </>
              );
            })} 
          </ul>
        </div>
      </div>
      

      {activeSelction === "timeline" && (
       <div>
            <h4>Timeline content here...</h4>
        </div>
         )} 

        {activeSelction === "{profile_key.profile_type}" && (
       <div>
            <h4>Address content here...</h4>
        </div>
         )} 

      {activeSelction === "about" && (
        <div>
            <div className="mt-5 ">
                <h5 className="text-muted">Contact Information</h5>
                <div className="row mt-3">
                    <div className="col-2">
                            <p>Phone :</p>
                            <p>Adress :</p>
                            <p>Email :</p>
                            <p>Site :</p>
                    </div>
                    <div className="col-6">
                            <p>9637960396</p>
                            <p>Megapolis Symphony, Phase 3, Hinjewadi Pune, 057411</p>
                            <p>pratikpawar@gmail.com :</p>
                            <p>pratikpawar.com :</p>
                    </div>
                </div>
            </div>

            <div className="mt-5 ">
                <h5 className="text-muted">Basic Information</h5>
                <div className="row mt-3">
                    <div className="col-2">
                        <p>Birthday :</p>
                        <p>Gender :</p>
                    </div>
                    <div className="col-6">
                        <p>03/08/1992</p>
                        <p>Male</p>
                    </div>
                </div>
            </div>
        </div>
        )}         
    </>
  );
}
