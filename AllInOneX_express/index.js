const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const userRoutes = require('./routes/userRoutes'); // Adjust the path as necessary
const postRoutes = require('./routes/postRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = 3000;

// Add CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

// Middleware for authentication (if needed)
app.use(authMiddleware);  

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to AllInOneX!');
});

// Mount routes
app.use('/api/user', userRoutes); // Base path for user routes
app.use('/api/posts', postRoutes); // Mount post routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
