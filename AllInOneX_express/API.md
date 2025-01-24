<!--  Create a database -->
CREATE DATABASE express_app

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
curl --location 'http://localhost:3000/api/user/users'

<!-- Create new user list curl request for postman POST-->

curl --location 'http://localhost:3000/api/user/create-user' \
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

