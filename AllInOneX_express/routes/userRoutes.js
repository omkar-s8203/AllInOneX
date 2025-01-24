const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.get('/users', userController.getUsers);

// Route to create a new user
router.post('/create-user', userController.createUser);

// Soft delete a user
router.delete('/delete/:userId', userController.softDeleteUser);

// Login route
router.post('/login', userController.loginUser);

module.exports = router;
