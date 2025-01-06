import { useState, useEffect } from "react";
import "./MainContent.css";
import Caption from "../../../components/Common/Caption";

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [comments, setComments] = useState([]); // Comments for the selected post
  const [selectedPost, setSelectedPost] = useState(null); // Selected post for the modal

  useEffect(() => {
    // Fetch posts and their comment counts
    const fetchPosts = async () => {
      try {
        const postsResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsData = await postsResponse.json();
        const postsWithCommentCounts = await Promise.all(
          postsData.map(async (post) => {
            const commentsData = Math.floor(Math.random() * 100 + 15);
            return { ...post, commentCount: commentsData };
          })
        );
        setPosts(postsWithCommentCounts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts or comments:", error);
      }
    };
    fetchPosts();
  }, []);

  // Function to fetch and display comments in the modal
  const showComments = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data); // Set comments for the modal
        setSelectedPost(postId); // Set the selected post ID
        setModalVisible(true); // Show the modal
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    setComments([]);
    setSelectedPost(null);
  };

  return (
    <div className="scrollbar">
      <div className="insta-page">
        {/* <h1>Instagram Posts</h1> */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="posts">
            {posts.map((post) => {
              const randomId = Math.floor(Math.random() * 1000) + 1; // Generate a random ID for each post

              return (
                <div className="postcard" key={post.id}>
                  <div className="post-boarder">
                    {/* Post card header */}
                    <div className="post-header">
                      <div className="profile-container">
                        <div className="profile-pic">
                          <img
                            src="https://picsum.photos/200" // Random profile picture
                            alt="Profile"
                          />
                        </div>
                      </div>
                      <div className="nameContainer">
                        <div className="profile-name">John Doe</div>
                        <div className="title">
                        <Caption text={post.title} />
                        </div>
                      </div>
                      <div className="followLink">Follow</div>
                    </div>

                    {/* Post body: image and description */}
                    <div className="postBody">
                      <div className="postImage">
                        <img
                          src={`https://picsum.photos/id/${randomId}/400/200`} // Use a different random ID for each post
                          alt="Post"
                        />
                      </div>
                      <div className="description"><Caption text={post.body} /></div>
                    </div>

                    {/* Footer: comment count and more comments */}
                    <div className="postFooter">
                      <div className="commentCount">
                        {post.commentCount} Comments
                      </div>
                      <div
                        className="viewComments"
                        onClick={() => showComments(post.id)}
                      >
                        <a>More Comments</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal for comments */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Comments for Post {selectedPost}</h2>
            <ul className="comments-list">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <li className="comment-item" key={comment.id}>
                    <div className="comment-profile-pic">
                      <img
                        src={`https://picsum.photos/seed/${comment.id}/50`} // Random profile picture for comments
                        alt="Commenter"
                      />
                    </div>
                    <div className="comment-text">
                      <div className="comment-username">{comment.name}</div>
                      <div className="comment-content">{comment.body}</div>
                    </div>
                  </li>
                ))
              ) : (
                <p>No comments available.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
