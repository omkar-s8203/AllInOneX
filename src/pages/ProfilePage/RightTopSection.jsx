import { faBookmark, faFlagCheckered, faSms } from "@fortawesome/free-solid-svg-icons";
import { faContactCard, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons"; // Correct import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import RightBottomSection from "./RightBottomSection";

export default function RightTopSection() {
  const [activeSelection, setActiveSelection] = useState("sendSMS");

  const handleToggle = (section) => {
    setActiveSelection(section);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <h4 className="font-weight-bold">Pratik Pawar</h4>
          <p className="text-muted">Front End Developer</p>
          <p className="text-muted">Ratings</p>
          <h2>
            8.6{" "}
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
          </h2>
        </div>

        <div className="col-12 col-md-6 mb-4">
          <a href="" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faLocation} className="mr-2" />
            Pune
          </a>
        </div>

        <div className="col-12 col-md-2 mb-4 text-md-right">
          <a href="" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faBookmark} className="mr-2" />
            Bookmark
          </a>
        </div>
      </div>

      <div className="row mt-5 gap-2 text-center m-0">
        <div
          className={`col-4 p-2 ${activeSelection === "sendSMS" ? "active" : ""}`}
          onClick={() => handleToggle("sendSMS")}
        >
          <FontAwesomeIcon icon={faSms} size="lg" />
          <p>Send SMS</p>
        </div>
        <div
          className={`col-4 p-2 ${activeSelection === "contacts" ? "active" : ""}`}
          onClick={() => handleToggle("contacts")}
        >
          <FontAwesomeIcon icon={faContactCard} size="lg" />
          <p>Contacts</p>
        </div>
        <div
          className={`col-4 p-2 ${activeSelection === "userReport" ? "active" : ""}`}
          onClick={() => handleToggle("userReport")}
        >
          <FontAwesomeIcon icon={faFlagCheckered} size="lg" />
          <p>Report User</p>
        </div>
      </div>

      {activeSelection === "contacts" && (
        <div className="mt-4">
          <RightBottomSection />
        </div>
      )}
    </>
  );
}
