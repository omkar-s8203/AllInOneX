import { useState } from "react";
import "./postPopup.css";
import PropTypes from 'prop-types';

function PostForm({ handleClose }) {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setUploadedPhoto(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Post Submitted!");
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Uploaded Photo:", uploadedPhoto);

    // Reset form
    setTitle("");
    setDescription("");
    setUploadedPhoto(null);

    // Close popup after submission
    handleClose();
  };

  const handleCancel = () => {
    // Reset form fields if you want to clear them on cancel
    setTitle("");
    setDescription("");
    setUploadedPhoto(null);

    // Close popup without submitting
    handleClose();
  };

  return (
    <div className="post-popup">
      <div className="post-card">
        <button className="close-button" onClick={handleClose}>
          ×
        </button>
        <h2 className="post-title">Create Post</h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>

          {/* Uploaded Photo */}
          <div className="form-group photo-upload">
            <label htmlFor="photo">Upload Photo</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
            {uploadedPhoto && (
              <img
                src={uploadedPhoto}
                alt="Uploaded"
                className="uploaded-photo"
              />
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              required
            ></textarea>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Post
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

PostForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default PostForm;
