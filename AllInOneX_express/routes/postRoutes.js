// routes/postRoutes.js
const express = require('express');
const { createPost, getPosts, editPost } = require('../controllers/postController');

const router = express.Router();

// Route to create a post
router.post('/create', createPost);
// Route to get posts
router.get('/fetch', getPosts);

// Route to edit a post
router.put('/edit/:post_id', editPost);
module.exports = router;
