import "./MainContent.css";
import { useState, useEffect } from 'react';


function MainContent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data); // Update the posts state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to fetch comment count when clicked
  const fetchCommentCount = (postId, index) => {
    // Fetch the comments for a specific post when the comment count is clicked
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        const updatedPosts = [...posts];
        updatedPosts[index].commentCount = comments.length; // Update comment count for this post
        setPosts(updatedPosts); // Update the state
      })
      .catch((error) => console.error('Error fetching comments:', error));
  };

  return (
    <div className="insta-page">
      <h1>Instagram Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="posts">
          {posts.map((post, index) => (
            <div className="postcard" key={post.id}>
              <div className="postHeader">
                <div className="title">
                {post.title}</div>
              </div>
              <div className="postBody">
                <div className="postImage">
                  Here will be a post picture
                </div>
                <div className="description">
                {post.body}
                </div>
              </div>
              <div className="postFooter">
              <div
                  className="commentCount"
                  onClick={() => fetchCommentCount(post.id, index)} // Trigger the function on click
                >
                  {post.commentCount !== undefined ? post.commentCount : 'Click for comment count'}
                </div>
                <div className="viewComments">View more anchor tag</div>
              </div>
            </div>

          ))}
        </div>
      )}
    </div>
  );
}

export default MainContent;