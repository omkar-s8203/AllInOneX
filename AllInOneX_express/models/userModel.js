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

module.exports = {
    getAllUsers
};
