import React from "react";
import Statistics from "./Statistics";
import AddressDetails from "./AddressDetails";

const MainContent = ({ selectedProfileType }) => {
  // Mock address data
  const addressData = {
    building: "Flat 101, Sunrise Apartments",
    block: "A Block",
    area: "MG Road",
    city: "Bangalore",
    district: "Bangalore Urban",
    region: "Karnataka",
    pin_code: "560001",
    country: "India",
    landmark: "Near City Mall",
    floor_number: "1",
    apartment_name: "Sunrise Apartments",
  };

  return (
    <div className="w-100 h-100">
      {/* Statistics Dashboard */}
      <Statistics />
        <hr />
      {/* Conditional Rendering Based on Selected Profile Type */}
      {selectedProfileType === "Address" ? (
        <AddressDetails address={addressData} />
      ) : (
        <div className="p-3">
          <h3>{selectedProfileType}</h3>
          <p>Details for {selectedProfileType} will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default MainContent;
