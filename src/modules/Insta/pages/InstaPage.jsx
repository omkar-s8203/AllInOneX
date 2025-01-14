import { useState } from "react";
import FollowSuggestions from "./FollowSuggestions";
import MainContent from "./MainContent";
import MenuBar from "./MenuBar";
import PostPopup from "./PostPopup"; // Import PostPopup component
import "./InstaPage.css";

function InstaPage() {
  const [isPostPopupOpen, setIsPostPopupOpen] = useState(false);

  // Function to toggle the pop-up visibility
  const togglePostPopup = () => {
    setIsPostPopupOpen((prevState) => !prevState);
  };

  return (
    <div className="insta_container">
      <div className="bar_col menu_bar">
        <MenuBar onPostsClick={togglePostPopup} />
      </div>
      <div className="bar_col main_content">
        <MainContent />
        {/* Render PostPopup conditionally */}
        {isPostPopupOpen && (
          <PostPopup onClose={togglePostPopup} />
        )}
      </div>
      <div className="bar_col follow_suggestions">
        <FollowSuggestions />
      </div>
    </div>
  );
}

export default InstaPage;
