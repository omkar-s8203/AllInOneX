const dbConfig = require('../config/db.json'); // Load database configuration
const mysql = require('mysql2');

// MySQL connection setup
const connection = mysql.createConnection(dbConfig);

// Create a new post
const createPost = (userId, postTitle, postCaption, mediaType, isActive = true, visibility = 'public', tags = null, location = null) => {
    return new Promise((resolve, reject) => {
        const query = `
            INSERT INTO posts (user_id, post_title, post_caption, media_type, is_active, visibility, tags, location)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        connection.query(
            query,
            [
                userId,
                postTitle,
                postCaption,
                mediaType,
                isActive,
                visibility,
                JSON.stringify(tags), // Convert tags array to JSON string
                location,
            ],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        );
    });
};

const getPosts = (filters) => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM posts WHERE 1=1'; // Base query
        const params = [];

        // Add filters dynamically
        if (filters.post_id) {
            query += ' AND post_id = ?';
            params.push(filters.post_id);
        }
        if (filters.user_id) {
            query += ' AND user_id = ?';
            params.push(filters.user_id);
        }
        if (filters.visibility) {
            query += ' AND visibility = ?';
            params.push(filters.visibility);
        }

        connection.query(query, params, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    createPost,
    getPosts,
};
