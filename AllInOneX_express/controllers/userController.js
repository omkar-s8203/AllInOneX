const db = require('../config/db.json');  // We'll load this later
const mysql = require('mysql2');

// MySQL connection setup
const connection = mysql.createConnection(db);
const userModel = require('../models/userModel');

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching users');
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { createdBy, username, email, mobile, password, status, role } = req.body;

        // Validate required fields
        if (!password || (!username && !email && !mobile)) {
            return res.status(400).json({
                error: 'Password is required, and at least one of username, email, or mobile must be provided.',
            });
        }
        
        // Check for unique fields
        if (username && !(await userModel.isFieldUnique('username', username))) {
            return res.status(400).json({ error: 'Username is already taken.' });
        }
        if (email && !(await userModel.isFieldUnique('email', email))) {
            return res.status(400).json({ error: 'Email is already registered.' });
        }
        if (mobile && !(await userModel.isFieldUnique('mobile', mobile))) {
            return res.status(400).json({ error: 'Mobile number is already registered.' });
        }

        // Proceed with user creation
        const result = await userModel.createUser(createdBy, username, email, mobile, password, status, role);
        res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};
