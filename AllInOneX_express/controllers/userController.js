const db = require('../config/db.json');  // We'll load this later
const mysql = require('mysql2');
// const bcrypt = require('bcrypt'); not using now

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

// Soft delete a user (mark as inactive)
exports.softDeleteUser = async (req, res) => {
    const { userId } = req.params; // Extract user ID from the request parameters

    try {
        // Call model to update the user status
        await userModel.updateUserStatus(userId, 'inactive');
        res.status(200).json({ message: `User with ID ${userId} has been marked as inactive.` });
    } catch (error) {
        console.error(error);
        if (error.message === 'User not found') {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(500).json({ error: 'Failed to update user status' });
        }
    }
};


// Login user
exports.loginUser = async (req, res) => {
    const { loginId, password } = req.body;

    try {
        // Validate input
        if (!loginId || !password) {
            return res.status(400).json({
                error: 'Both login ID and password are required.',
            });
        }

        // Determine the field type (username, email, or mobile)
        let field;
        if (loginId.includes('@')) {
            field = 'email'; // Login ID contains '@', assume it's an email
        } else if (!isNaN(loginId) && loginId.length >= 10) {
            field = 'mobile'; // Login ID is numeric and likely a mobile number
        } else {
            field = 'username'; // Otherwise, treat it as a username
        }

        // Find the user by the identified field
        const user = await userModel.findUserByField(field, loginId);

        // Verify the password
        // const isPasswordValid = await bcrypt.compare(password, user.password);
        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid credentials, please enter correct password!' });
        }

        // Send a success response
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.user_id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);
        if (error.message === 'User not found or inactive') {
            res.status(404).json({ error: 'User not found or inactive' });
        } else {
            res.status(500).json({ error: 'Login failed' });
        }
    }
};

// Get users by status
exports.getUsersByStatus = async (req, res) => {
    const { status } = req.params;

    try {
        // Validate the status value
        if (!['active', 'inactive', 'banned'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status value. Allowed values: active, inactive, banned' });
        }

        // Fetch users by status
        const users = await userModel.getUsersByStatus(status);

        // Return the users
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users by status' });
    }
};


