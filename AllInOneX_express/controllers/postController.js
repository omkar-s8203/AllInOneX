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

module.exports = {
    createPost,
};
