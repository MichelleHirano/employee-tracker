const inquirer = require('inquirer');
const cTable = require('console.table');
const Connection = require('mysql2/typings/mysql/lib/Connection');

//prompt user for choices

const promptUser = () => {
    inquirer.prompt([
        {
            name:'choices',
            type:'list',
            message:'Please select an option:',
            choices:[
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'View All Employees By Department',
                'Update Employee Role',
                'Update Employee Manager',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Remove Employee',
                'Remove Role',
                'Remove Department',
                'Exit'  
            ]
        }
    ])
    .then ((answers) =>{
        const {choices} = answers;

        if (choices === 'View All Employees'){
            viewAllEmployees();
        }

        if (choices === 'View All Departments'){
            viewAllDepartments();
        }

        if (choices === 'View All Employees By Department'){
            viewAllEmployeesByDepartment();
        }
        
        if (choices === 'Add Employee'){
            addEmployee();
        }

        if (choices === 'Remove Employee'){
            removeEmployee();
        }

        if (choices === 'Update Employee Role'){
            updateEmployeeRole();
        }

        if (choices === 'Update Employee Manager'){
            updateEmployeeManager();
        }

        if (choices === 'View All Roles'){
            viewAllRoles();
        }

        if (choices === 'Add Roles'){
            addRole();
        }

        if (choices === 'Remove Roles'){
            removeRole();
        }

        if (choices === 'Add Department'){
            addDepartment();
        }

        if (choices === 'Exit'){
            connection.end;
        }
    });
};