import inquirer from 'inquirer';
import { getAllDepartments, getAllRoles, getAllEmployees } from './db/queries.js';

async function mainMenu() {
  while (true) { // Use an infinite loop
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
        'Quit',
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
      case 'Quit':
        return; // Use 'return' to exit the function and return to the terminal
    }
  }
}

mainMenu();
