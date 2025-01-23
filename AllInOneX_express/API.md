<!--  Create a database -->
CREATE DATABASE express_app

<!-- Select db to use -->
USE express_app;

<!-- Insert query for Super Admin only once when we create new db -->
Insert a super admin or initial user (no 'created_by' reference)
INSERT INTO users (username, email, mobile, password, status, role)
VALUES ('admin', 'admin@example.com', '1234567890', 'admin', 'active', 'admin');
<!--  Insert query for user -->
INSERT INTO users (created_by, username, email, mobile, password, status, role)
VALUES (1, 'Omkar', 'omkar@example.com', '1234567891', 'admin', 'active', 'admin');

<!-- Get users list cmd -->
SELECT * FROM users;

<!-- Get users list curld for postman -->
curl --location 'http://localhost:3000/api/user/users'

<!-- Create new user list curl request for postman -->

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

