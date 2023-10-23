const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db',
};

const connection = mysql.createPool(dbConfig);

module.exports = connection;