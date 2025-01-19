import { faBookmark, faFlag, faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { faContactCard, faFlagCheckered, faLocation, faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import RightBottomSection from "./RightBottomSection";

export default function RightTopSection() {

    const [activeSelection, setActiveSelection] = useState("sendSMS")
   
    const handleToggle = (section) =>{
        setActiveSelection(section)
    }
  return (
    <>
      <div className="row">
        <div className="col-4">
          <h4>Pratik Pawar</h4>
          <p>Front End Developer</p>
          <p className="text-muted">Ratings</p>
          
          <h2>8.6 <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStarHalf}/> </h2> 
        </div>
        <div className="col-6">
          <a href="" className="float-start">
            <FontAwesomeIcon icon={faLocation}/>
            Pune
          </a>
        </div>
        <div className="col-2">
          <a href="" className="">
          <FontAwesomeIcon icon={faBookmark} />
          
             Bookmark
          </a>
        </div>
      </div>

      <div className="row mt-5 gap-2 text-center m-0">
        <div className="col-2 p-2" onClick={()=>handleToggle("sendSMS")}>
        <FontAwesomeIcon icon={faSms} />

          <p>Send SMS</p>
        </div>
        <div className="col-2 p-2"onClick={()=>handleToggle("contacts")} >
        <FontAwesomeIcon icon={faContactCard} />

          <p>Contacts</p>
        </div>
        <div className="col-2 p-2" onClick={()=>handleToggle("userReport")}>
          <FontAwesomeIcon icon={faFlagCheckered} />

          <p>Report User</p>
        </div>
      </div>
      
      {activeSelection === "contacts" && (
      <div className="">

        <RightBottomSection/>
      </div>
      )}
    </>
  );
}
