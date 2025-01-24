// routes/postRoutes.js
const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');

const router = express.Router();

// Route to create a post
router.post('/create', createPost);
// Route to get posts
router.get('/fetch', getPosts);

module.exports = router;
