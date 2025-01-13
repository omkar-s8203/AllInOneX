import FollowSuggestions from "./FollowSuggestions";
import MainContent from "./MainContent";
import MenuBar from "./MenuBar";
import "./InstaPage.css";

function InstaPage() {
  return (
    <div className="insta_container">
      <div className="bar_col menu_bar ">
          <MenuBar />
      </div>
      <div className="bar_col main_content">
          <MainContent />
      </div>
      <div className="bar_col follow_suggestions">
          <FollowSuggestions />
      </div>
    </div>
  );
}

export default InstaPage;
