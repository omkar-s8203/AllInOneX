import React, { useState } from "react";
import Sidebar from "./AccountComponents/Sidebar";
import MainContent from "./AccountComponents/MainContent ";

const AccountPage = () => {
  const [selectedProfileType, setSelectedProfileType] = useState("Address");

  const handleSelectProfile = (profileType) => {
    setSelectedProfileType(profileType);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-3">
          <Sidebar onSelectProfile={handleSelectProfile} />
        </div>

        {/* Main Content */}
        <div className="col-9">
          <MainContent selectedProfileType={selectedProfileType} />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
