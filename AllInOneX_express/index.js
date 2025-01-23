const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

app.use(authMiddleware);  // Use the auth middleware globally (if needed)
app.use(express.json());

// Use the userRoutes for user-related functionality
app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
