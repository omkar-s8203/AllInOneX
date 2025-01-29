import React from "react";
import profile from "./profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faWallet,
  faMoneyBillTransfer,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileSectionLeft({
  activeSection,
  setActiveSection,
}) {
  const getButtonClass = (section) =>
    `btn my-2 ${
      activeSection === section ? "btn-secondary" : "btn-outline-none"
    }`;

  return (
    <div className="container">
      <div className="text-center">
        <p>My Profile</p>
      </div>
      <div className="text-center">
        <img
          src={profile}
          alt="my image"
          style={{ width: "100px", borderRadius: "50%" }}
        />
        <p>Hritik Pawar</p>
      </div>
      <div className="d-flex flex-column">
        <button
          className={getButtonClass("Overview")}
          onClick={() => setActiveSection("Overview")}
        >
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Overview
        </button>
        <button
          className={getButtonClass("Statistics")}
          onClick={() => setActiveSection("Statistics")}
        >
          <FontAwesomeIcon icon={faChartBar} className="me-2" />
          Statistics
        </button>
        <button
          className={getButtonClass("My Wallet")}
          onClick={() => setActiveSection("My Wallet")}
        >
          <FontAwesomeIcon icon={faWallet} className="me-2" />
          My Wallet
        </button>
        <button
          className={getButtonClass("Transfer")}
          onClick={() => setActiveSection("Transfer")}
        >
          <FontAwesomeIcon icon={faMoneyBillTransfer} className="me-2" />
          Transfer
        </button>
        <button
          className={getButtonClass("Message")}
          onClick={() => setActiveSection("Message")}
        >
          <FontAwesomeIcon icon={faMessage} className="me-2" />
          Message
        </button>
      </div>
    </div>
  );
}
