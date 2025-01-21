import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditAddressModal from "./EditAddressModal"; // Import the modal component

const AddressDetails = ({ address }) => {
  const [showModal, setShowModal] = useState(false);

  // Open modal when edit button is clicked
  const handleEditClick = () => {
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Save changes and close modal
  const handleSaveChanges = (updatedAddress) => {
    console.log("Updated Address:", updatedAddress);
    // You can update the address state here or send it to the backend
    // Example: setAddress(updatedAddress);
    setShowModal(false); // Close modal after saving
  };

  return (
    <div className="address-details-container">
      {/* Card Header with Title and Edit Button */}
      <div className="address-details-header card-header d-flex justify-content-between align-items-center mb-4">
        <h2 className="address-details-title">Address Details</h2>
        <button
          className="btn btn-primary address-details-edit-btn"
          onClick={handleEditClick}
          aria-label="Edit Address"
        >
          <FaEdit /> Edit
        </button>
      </div>

      {/* Address Fields */}
      <div className="address-details-row">
        {Object.entries(address).map(([key, value]) => (
          <div key={key} className="address-details-card">
            <strong className="address-details-label">
              {key.replace("_", " ")}:
            </strong>
            <span className="address-details-value">{value}</span>
          </div>
        ))}
      </div>

      {/* Edit Address Modal */}
      <EditAddressModal
        show={showModal}
        onClose={handleCloseModal}
        address={address}
        onSave={handleSaveChanges}
      />
    </div>
  );
};

export default AddressDetails;
