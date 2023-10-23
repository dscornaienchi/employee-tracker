const inquirer = require('inquirer');
const { getAllDepartments, getAllRoles, getAllEmployees } = require('./db/queries');

async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit'
        ],
    });

    switch (action) {
        case 'View all departments':
            const departments = await getAllDepartments();
            console.table(departments);
            break;
        case 'View all roles':
            const roles = await getAllRoles();
            console.table(roles);
            break;
        case 'View all employees':
            const employees = await getAllEmployees();
            console.table(employees);
            break;
    }
}

mainMenu();