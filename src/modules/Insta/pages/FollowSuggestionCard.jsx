import "./FollowSuggestionCard.css";
import PropTypes from 'prop-types';

FollowSuggestionCard.propTypes = {
  profilePic: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  onFollow: PropTypes.func.isRequired,
};


function FollowSuggestionCard({ profilePic, username, fullName, onFollow }) {
  return (
    <div className="follow-card">
      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <span className="username">{username}</span>
          <span className="full-name">{fullName}</span>
        </div>
      </div>
      <button className="follow-btn" onClick={onFollow}>
        Follow
      </button>
    </div>
  );
}

export default FollowSuggestionCard;
