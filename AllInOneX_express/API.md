<!--  Create a database -->
CREATE DATABASE express_app

<!-- to take a backup of sql file -->
c:\Program Files\MySQL\MySQL Server 8.0\bin>mysqldump -h localhost -u root -p express_app > my_custom_backup.sql
Enter password: *****
<!-- Select db to use -->
USE express_app;

<!-- mysql> CREATE TABLE users (
    ->     user_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     created_by INT,
    ->     username VARCHAR(255) UNIQUE,
    ->     email VARCHAR(255) UNIQUE,
    ->     mobile VARCHAR(15) UNIQUE,
    ->     password VARCHAR(255) NOT NULL,
    ->     status ENUM('active', 'inactive', 'banned') DEFAULT 'active',
    ->     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ->     last_login TIMESTAMP,
    ->     role ENUM('user', 'admin', 'moderator') DEFAULT 'user',
    ->     FOREIGN KEY (created_by) REFERENCES users(user_id)
    -> ); -->

<!-- Insert query for Super Admin only once when we create new db -->
Insert a super admin or initial user (no 'created_by' reference)
INSERT INTO users (username, email, mobile, password, status, role)
VALUES ('admin', 'admin@example.com', '1234567890', 'admin', 'active', 'admin');
<!--  Insert query for user -->
INSERT INTO users (created_by, username, email, mobile, password, status, role)
VALUES (1, 'Omkar', 'omkar@example.com', '1234567891', 'admin', 'active', 'admin');

<!-- Get users list cmd -->
SELECT * FROM users;

<!-- Get users list curld for postman GET-->
curl --location 'http://localhost:3000/api/user/fetch'

<!-- Create new user list curl request for postman POST-->

curl --location 'http://localhost:3000/api/user/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "createdBy": 1,
    "username": "",
    "email": "john2@example.com",
    "mobile": "1234567890",
    "password": "hashedpassword",
    "status": "active",
    "role": "user"
}
'
<!-- END here -->

<!-- Delete Inactive user DELETE-->
curl --location --request DELETE 'http://localhost:3000/api/user/delete/3'
<!-- Backend Response: delete -->

Success: { message: "User with ID 1 has been marked as inactive." }
Error (User Not Found): { error: "User not found" }
<!-- End here -->

<!-- Login API POST -->
curl --location 'http://localhost:3000/api/user/login' \
--header 'Content-Type: application/json' \
--data '{
    "loginId": "omkar", 
    "password": "1234567891"
}
'
<!-- Response -->
{
    "message": "Login successful",
    "user": {
        "id": 2,
        "username": "Omkar",
        "email": "omkar@example.com",
        "role": "admin"
    }
}

{ "error": "User not found or inactive" }
{ "error": "Both login ID and password are required." }
"error": "Invalid credentials, please enter correct password!"
<!-- End here -->

<!-- Get User list status wise GET -->
curl --location 'http://localhost:3000/api/user/status/inactive'
<!-- Response -->
[{"user_id":3,"created_by":1,"username":"johndoe","email":"john@example.com","mobile":"1234567892","password":"hashedpassword","status":"inactive","created_at":"2025-01-23T17:10:19.000Z","updated_at":"2025-01-24T10:11:01.000Z","last_login":null,"role":"user"}]
<!-- End here -->

<!----------------------------------------- Insta module APIT  --------------------------->

<!-- Create Posts table -->
CREATE TABLE posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, -- Foreign key from users table
    post_title VARCHAR(255), -- Title of the post
    post_caption TEXT, -- Caption for the post
    media_type ENUM('image', 'video', 'carousel') NOT NULL, -- Type of media
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Post creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Post update timestamp
    is_active BOOLEAN DEFAULT TRUE, -- Indicates if the post is active
    visibility ENUM('public', 'private', 'friends') DEFAULT 'public', -- Privacy settings
    tags JSON, -- JSON format to store hashtags or mentions
    location VARCHAR(255), -- Location or geotag information
    FOREIGN KEY (user_id) REFERENCES users(user_id) -- Linking to users table
);
<!-- Query OK, 0 rows affected  -->

<!-- Table: post_media
This table handles multiple media items for a single post. -->
CREATE TABLE post_media (
    media_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL, -- Foreign key referencing posts
    media_url VARCHAR(255) NOT NULL, -- URL or path to the media file
    media_type ENUM('image', 'video') NOT NULL, -- Type of media
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Media creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Media update timestamp
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE -- Deletes media when the post is deleted
);

Query OK, 0 rows affected (0.06 sec)
<!--  -->
<!-- Table: comments
This table stores comments on posts -->
CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL, -- Foreign key referencing posts
    user_id INT NOT NULL, -- Foreign key referencing users
    comment_text TEXT NOT NULL, -- The comment content
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Comment creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Comment update timestamp
    is_active BOOLEAN DEFAULT TRUE, -- Indicates if the comment is active
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE, -- Deletes comments when the post is deleted
    FOREIGN KEY (user_id) REFERENCES users(user_id) -- Links the comment to the user
);
<!--  -->

<!--  Table: likes
This table tracks likes for posts -->
CREATE TABLE likes (
    like_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL, -- Foreign key referencing posts
    user_id INT NOT NULL, -- Foreign key referencing users
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Like creation timestamp
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE, -- Deletes likes when the post is deleted
    FOREIGN KEY (user_id) REFERENCES users(user_id), -- Links the like to the user
    UNIQUE (post_id, user_id) -- Ensures a user can like a post only once
);
<!-- Post table creation complete here.. -->

<!-- Post module API -->
<!-- Create Post Select type POST  -->
curl --location 'http://localhost:3000/api/posts/create' \
--header 'Content-Type: application/json' \
--data '{
    "user_id": 2,
    "post_title": "My Travel Post",
    "post_caption": "Exploring new places!",
    "media_type": "image",
    "visibility": "friends",
    "tags": ["#travel", "#adventure"],
    "location": "Himalayas"
}
'
<!-- Response -->
{
    "message": "Post created successfully.",
    "post_id": 101
}

{
    "error": "User ID and media type are required."
}
{
    "error": "Failed to create post."
}
<!-- End here -->

<!-- Get Posts List -->

curl --location 'http://localhost:3000/api/posts/fetch?user_id=1&post_id=1&visibility=public&visibility=private&visibility=friends'

Note: untick params from list when you call api
<!-- Response -->
[
    {
        "post_id": 1,
        "user_id": 1,
        "post_title": "My First Post",
        "post_caption": "This is a test caption",
        "media_type": "image",
        "created_at": "2025-01-24T13:11:04.000Z",
        "updated_at": "2025-01-24T13:11:04.000Z",
        "is_active": 1,
        "visibility": "public",
        "tags": [
            "#fun",
            "#coding"
        ],
        "location": "San Francisco"
    }
]
<!-- Handle Error -->
 "message": "No posts found."
   "error": "Failed to fetch posts."
<!--  End here -->

<!-- Edit Pos use PUT method -->
PUT http://localhost:3000/api/posts/edit/:post_id

{
    "user_id": 1,
    "updates": {
        "post_title": "Updated Post Title",
        "post_caption": "Updated Caption",
        "visibility": "friends"
    }
}
Response:
{
    "message": "Post updated successfully.",
    "affectedRows": 1
}
Error response:
{
    "error": "Post ID, User ID, and updates are required."
}

Failure 404: 
"error": "Post not found or unauthorized action."

<!-- End here... -->

<!-- DELETE Post Curl request -->
curl --location --request DELETE 'http://localhost:3000/api/posts/delete/2' \
--header 'Content-Type: application/json' \
--data '{
    "user_id": 2
}
'
<!--  DELETE Post API req-->
DELETE http://localhost:3000/api/posts/delete/:post_id
Request body: {
    "user_id": 1
}
Success Response:{
    "message": "Post deleted successfully.",
    "affectedRows": 1
}
Failure (400 Bad Request):{
    "error": "Post ID and User ID are required."
}
Failure (404 Not Found):{
    "error": "Post not found or unauthorized action."
}
Failure (500 Internal Server Error):{
    "error": "Failed to delete post."
}
<!-- End here -->
