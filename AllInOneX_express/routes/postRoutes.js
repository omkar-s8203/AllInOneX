// routes/postRoutes.js
const express = require('express');
const { createPost } = require('../controllers/postController');

const router = express.Router();

// Route to create a post
router.post('/create', createPost);

module.exports = router;
