Project Setup Guide
1. Clone the Project
First, clone the project repository to your local machine:


git clone <repository-url>
cd <project-directory>
2. Install Dependencies
After cloning the project, install the necessary dependencies:


npm install
3. Database Configuration
The project requires a MySQL database connection. Since different developers may have different configurations, you will need to update the db.json file according to your local environment.

For GB's Machine: Use the following configuration:


{
    "host": "localhost",
    "user": "root",
    "password": "admin",
    "database": "express_app"
}
For Gayatri/Omkar's PC: Use the following configuration:


{
    "host": "localhost",
    "user": "root",
    "password": "Gayatri",
    "database": "useredb"
}
To update your configuration, navigate to the config/db.json file and replace the existing settings with your local database credentials.


5. Run the Application
Once everything is set up, you can start the application:

bash
Copy
Edit
node index.js
The server should be running on http://localhost:3000.

6. Testing the API
You can use Postman or any API testing tool to test the API endpoints.

Example request:

Endpoint: GET http://localhost:3000/api/users
Expected Response: A list of users from your MySQL database.

7. Important Notes
Ensure that you have MySQL installed and running on your machine.
Make sure that the express_app or useredb database is created before running the application. If not, you can create it manually using the MySQL command line or a tool like phpMyAdmin.