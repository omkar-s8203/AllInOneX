import { useState } from "react";
import "./CreatePostForm.css";

function CreatePostForm({ setView }) {
    const [formData, setFormData] = useState({
        title: "",
        media: null,
        description: "",
        visibility: "public",
        tags: [],
    });

    const [tagInput, setTagInput] = useState(""); // For handling individual tag input
    const [error, setError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false); // To control success pop-up
    const [isLoading, setIsLoading] = useState(false); // To show loading indicator

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleMediaChange = (e) => {
        setFormData({
            ...formData,
            media: e.target.files,
        });
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !formData.tags.includes(tagInput)) {
            setFormData({
                ...formData,
                tags: [...formData.tags, tagInput],
            });
            setTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setFormData({
            ...formData,
            tags: formData.tags.filter((tag) => tag !== tagToRemove),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title  || !formData.description) {
            setError("All fields are required.");
            return;
        }

        setIsLoading(true);
        setError("");

        // Prepare API payload
        const apiPayload = {
            user_id: 2, // Default user_id (adjust as needed)
            post_title: formData.title,
            post_caption: formData.description,
            media_type: "image", // Default media type
            visibility: formData.visibility,
            tags: formData.tags,
            location: "Unknown", // Default location (adjust as needed)
        };

        try {
            const response = await fetch("http://localhost:3000/api/posts/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiPayload),
            });
            console.log(response);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to create post");
            }

            // Show success message
            setIsSubmitted(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClosePopup = () => {
        setIsSubmitted(false);
        setView("mainContent"); // Return to main content after closing pop-up
    };

    return (
        <div className="create-post-form-container">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* <div className="form-group">
                    <label htmlFor="media">Media (Image/Video)</label>
                    <input
                        type="file"
                        id="media"
                        name="media"
                        onChange={handleMediaChange}
                        multiple
                        required
                    />
                </div> */}

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Visibility</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="visibility"
                                value="public"
                                checked={formData.visibility === "public"}
                                onChange={handleInputChange}
                            />
                            Public
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="visibility"
                                value="private"
                                checked={formData.visibility === "private"}
                                onChange={handleInputChange}
                            />
                            Private
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="visibility"
                                value="just_for_you"
                                checked={formData.visibility === "just_for_you"}
                                onChange={handleInputChange}
                            />
                            Just for You
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Tags</label>
                    <div className="tag-input-group">
                        <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            placeholder="Enter a tag"
                        />
                        <button
                            type="button"
                            onClick={handleAddTag}
                            className="add-tag-btn"
                        >
                            Add Tag
                        </button>
                    </div>
                    <div className="tags-container">
                        {formData.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveTag(tag)}
                                    className="remove-tag-btn"
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="form-actions">
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit"}
                    </button>
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => setView("mainContent")}
                    >
                        Cancel
                    </button>
                </div>
            </form>

            {/* Success Pop-up */}
            {isSubmitted && (
                <div className="success-popup">
                    <div className="popup-content">
                        <h3>Post Published Successfully!</h3>
                        <button onClick={handleClosePopup} className="close-popup-btn">
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreatePostForm;
