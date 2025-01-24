const db = require('../config/db.json');  // We'll load this later
const mysql = require('mysql2');

// MySQL connection setup
const connection = mysql.createConnection(db);

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
};

const createUser = (createdBy, username, email, mobile, password, status = 'active', role = 'user') => {
    return new Promise((resolve, reject) => {
        const query = `
            INSERT INTO users (created_by, username, email, mobile, password, status, role)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        connection.query(
            query,
            [createdBy, username, email, mobile, password, status, role],
            (err, result) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        reject(new Error('A user with the provided username, email, or mobile already exists.'));
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(result);
                }
            }
        );
    });
};


// Check if a value is unique
const isFieldUnique = (field, value) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT COUNT(*) AS count FROM users WHERE ${field} = ?`;
        connection.query(query, [value], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0].count === 0); // true if unique, false otherwise
            }
        });
    });
};

const updateUserStatus = (userId, status) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE users SET status = ? WHERE user_id = ?`;
        connection.query(query, [status, userId], (err, result) => {
            if (err) {
                reject(err);
            } else if (result.affectedRows === 0) {
                reject(new Error('User not found'));
            } else {
                resolve(result);
            }
        });
    });
};


module.exports = {
    getAllUsers,
    createUser,
    updateUserStatus,
    isFieldUnique
};
