const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Adjust the path as necessary
const postRoutes = require('./routes/postRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const app = express();
const PORT = 3000;
app.use(authMiddleware);  // Use the auth middleware globally (if needed)
// Middleware
app.use(bodyParser.json()); // For parsing JSON requests

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to AllInOneX!');
});

// Mount routes
app.use('/api/user', userRoutes); // Base path for user routes

// Mount post routes
app.use('/api/posts', postRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
