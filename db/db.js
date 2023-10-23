import mysql from 'mysql2/promise';

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    //password: 'password',
    database: 'employee_db',
};

const connection = mysql.createPool(dbConfig);

export default connection;