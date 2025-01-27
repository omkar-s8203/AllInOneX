const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = 3000;

// Add CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware for authentication
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


// Catch-all route for any unhandled routes
app.all('*', (req, res) => {
  res.status(404).json({
    message: `Route ${req.originalUrl} not found.`,
    error:`Route ${req.originalUrl} not found.`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
