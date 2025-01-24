import FollowSuggestionCard from "./FollowSuggestionCard";

function FollowSuggestions() {
  const suggestions = [
    {
      id: 1,
      profilePic:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      username: "johndoe",
      fullName: "John Doe",
    },
    {
      id: 2,
      profilePic: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      username: "janedoe",
      fullName: "Jane Doe",
    },
    {
      id: 2,
      profilePic: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      username: "janedoe",
      fullName: "Jane Doe",
    },
    {
      id: 2,
      profilePic: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      username: "janedoe",
      fullName: "Jane Doe",
    },
    {
      id: 2,
      profilePic: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      username: "janedoe",
      fullName: "Jane Doe",
    },
    {
      id: 2,
      profilePic: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      username: "janedoe",
      fullName: "Jane Doe",
    },
    {
      id: 2,
      profilePic: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      username: "janedoe",
      fullName: "Jane Doe",
    },
  ];

  const handleFollow = (username) => {
    alert(`You followed ${username}!`);
  };

  return (
    <div>
       <h2>Follow Suggestion</h2>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id}>
          {/* <h2>Follow Suggestion</h2> Add title here */}
          <FollowSuggestionCard
            profilePic={suggestion.profilePic}
            username={suggestion.username}
            fullName={suggestion.fullName}
            onFollow={() => handleFollow(suggestion.username)}
          />
        </div>
      ))}
    </div>
  );
}

export default FollowSuggestions;
