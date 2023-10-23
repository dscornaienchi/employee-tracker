const db = require('./db');

async function getAllDepartments() {
    const [rows] = await db.query('SELECT * FROM department');
    return rows;
}

async function getAllRoles() {
    const [rows] = await db.query('SELECT * FROM role');
    return rows;
}

async function getAllEmployees() {
    const [rows] = await db.query('SELECT * FROM employee');
    return rows;
}