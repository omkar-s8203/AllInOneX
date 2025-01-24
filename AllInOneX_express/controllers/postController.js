const Post = require('../models/postModel');

// Controller for creating a new post
const createPost = async (req, res) => {
    try {
        const { user_id, post_title, post_caption, media_type, is_active, visibility, tags, location } = req.body;

        // Validate required fields
        if (!user_id || !media_type) {
            return res.status(400).json({ error: 'User ID and media type are required.' });
        }

        // Prepare data for the model
        const result = await Post.createPost(
            user_id,
            post_title,
            post_caption,
            media_type,
            is_active,
            visibility,
            tags,
            location
        );

        res.status(201).json({
            message: 'Post created successfully.',
            post_id: result.insertId,
        });
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).json({ error: 'Failed to create post.' });
    }
};


// Controller to get posts
const getPosts = async (req, res) => {
    try {
        const filters = {
            post_id: req.query.post_id,   // Get post by ID
            user_id: req.query.user_id,  // Get posts by a specific user
            visibility: req.query.visibility, // Filter by visibility
        };

        const posts = await Post.getPosts(filters);

        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found.' });
        }

        res.status(200).json(posts);
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).json({ error: 'Failed to fetch posts.' });
    }
};

// Controller to edit a post
const editPost = async (req, res) => {
    try {
        const { post_id } = req.params; // Get post ID from the URL
        const user_id = req.body.user_id; // Get user ID from the request body
        const updates = req.body.updates; // Get updates object from the request body

        if (!post_id || !user_id || !updates) {
            return res.status(400).json({ error: 'Post ID, User ID, and updates are required.' });
        }

        // Validate updates to avoid empty fields
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ error: 'No updates provided.' });
        }

        // Perform the update
        const result = await Post.updatePost(post_id, user_id, updates);

        res.status(200).json({
            message: 'Post updated successfully.',
            affectedRows: result.affectedRows,
        });
    } catch (err) {
        console.error('Error editing post:', err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createPost,
    getPosts,
    editPost,
};
