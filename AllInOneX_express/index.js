import express from 'express';
import cors from 'cors'; 

import mysql from 'mysql2'; // Import MySQL package
const app = express();
const PORT = 3000;

app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',       // MySQL host
  user: 'root',            // MySQL username (default: root)
  password: 'Gayatri',            // MySQL password (if applicable)
  database: 'useredb'      // Your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Routes

// Create a new user
app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required.' });
  }

  const query = 'INSERT INTO users (user_name, user_email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email already exists.' });
      }
      return res.status(500).json({ message: 'Error creating user', error: err.message });
    }
    res.status(201).json({ message: 'User created successfully', user: { name, email, password } });
  });
});

// Get all users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
    res.json(results);
  });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const query = 'UPDATE users SET user_name = ?, user_email = ?, password = ? WHERE user_id = ?';
  db.query(query, [name, email, password, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating user', error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ message: 'User updated successfully' });
  });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM users WHERE user_id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting user', error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ message: 'User deleted successfully' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
