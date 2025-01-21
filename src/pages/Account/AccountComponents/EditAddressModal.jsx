import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Close icon
import "./EditAddressModal.css";

const EditAddressModal = ({ show, onClose, address, onSave }) => {
  const [formData, setFormData] = useState({ ...address });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Save the updated data
    onClose(); // Close the modal
  };

  if (!show) return null; // Do not render the modal if `show` is false

  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="modal-title" aria-hidden={!show}>
      <div className="modal-container">
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <FaTimes />
        </button>
        <h2 id="modal-title">Edit Address</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="form-group">
              <label htmlFor={key} className="form-label">
                {key.replace("_", " ").toUpperCase()}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAddressModal;
