import inquirer from 'inquirer';
import { getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee } from './db/queries.js';

async function mainMenu() {
  let quit = false;

  while (!quit) {
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
        'Quit',
      ],
    });

    switch (action) {
      case 'View all departments':
        const departments = await getAllDepartments();
        const formattedDepartments = departments.map((department) => ({
          id: department.id,
          name: department.name,
        }));
        console.table(formattedDepartments, ['id', 'name']);
        break;
      case 'View all roles':
        const roles = await getAllRoles();
        console.table(roles, ['id', 'title', 'salary', 'department_id']);
        break;
      case 'View all employees':
        const employees = await getAllEmployees();
        console.table(employees, ['id', 'first_name', 'last_name', 'role_id', 'manager_name']);
        break;
      case 'Add a department':
        const departmentData = await inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Enter the department name:',
          },
        ]);
        await addDepartment(departmentData.name);
        console.log(`Department '${departmentData.name}' has been added.`);
        break;
      case 'Add a role':
        const roleData = await inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Enter the role title:',
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Enter the role salary:',
          },
          {
            type: 'input',
            name: 'department_id',
            message: 'Enter the role department ID:',
          },
        ]);

        await addRole(roleData.title, roleData.salary, roleData.department_id);
        console.log(`Role '${roleData.title}' has been added.`);
        break;
      case 'Add an employee':
        const employeeData = await inquirer.prompt([
          {
            type: 'input',
            name: 'first_name',
            message: 'Enter the employee first name:',
          },
          {
            type: 'input',
            name: 'last_name',
            message: 'Enter the employee last name:',
          },
          {
            type: 'input',
            name: 'role_id',
            message: 'Enter the employee role ID:',
          },
          {
            type: 'input',
            name: 'manager_name',
            message: "Enter the manager's name:",
          },
        ]);

        await addEmployee(employeeData.first_name, employeeData.last_name, employeeData.role_id, employeeData.manager_name);
        console.log(`Employee '${employeeData.first_name} ${employeeData.last_name}' has been added.`);
        break;
      case 'Quit':
        quit = true;
        break;
    }
  }
}

mainMenu();





