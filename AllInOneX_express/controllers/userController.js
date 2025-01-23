const db = require('../config/db.json');  // We'll load this later
const mysql = require('mysql2');

// MySQL connection setup
const connection = mysql.createConnection(db);

exports.getUsers = (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error fetching users');
        }
        res.json(results);
    });
};
