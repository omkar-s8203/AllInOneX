const express = require('express');
const { createPost, getPosts, editPost, deletePost } = require('../controllers/postController');

const router = express.Router();

// Route to create a post
router.post('/create', createPost);

// Route to get posts
router.get('/fetch', getPosts);

// Route to edit a post
router.put('/edit/:post_id', editPost);

// Route to delete a post
router.delete('/delete/:post_id', deletePost);

module.exports = router;
