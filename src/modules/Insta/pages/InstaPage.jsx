import { useState } from "react";
import FollowSuggestions from "./FollowSuggestions";
import MainContent from "./MainContent";
import MenuBar from "./MenuBar";
import CreatePostForm from "./CreatePostForm";
import "./InstaPage.css";

function InstaPage() {
  const [activeView, setActiveView] = useState("mainContent"); // State to control the view in the main content area

  const renderMainContent = () => {
    switch (activeView) {
      case "mainContent":
        return <MainContent />;
      case "createPost":
        return <CreatePostForm setView={setActiveView} />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="insta_container">
      <div className="bar_col menu_bar">
        <MenuBar setView={setActiveView} /> {/* Pass the state setter to the MenuBar */}
      </div>
      <div className="bar_col main_content">
        {renderMainContent()} {/* Render the active component */}
      </div>
      <div className="bar_col follow_suggestions">
        <FollowSuggestions />
      </div>
    </div>
  );
}

export default InstaPage;
