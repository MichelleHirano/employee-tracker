//requirements
const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');

//connection
const connection = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'rootpass',
    database: 'employees'
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    askQuestions();
});

//prompt user for choices

function askQuestions () {
    inquirer.prompt([
        {
            name:'choices',
            type:'list',
            message:'Please select an option:',
            choices:[
                'View All Employees',
                'View All Departments',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Update Employee Role
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
        
        if (choices === 'Add Employee'){
            addEmployee();
        }


        if (choices === 'Update Employee Role'){
            updateEmployeeRole();
        }

        if (choices === 'Add Roles'){
            addRole();
        }


        if (choices === 'Add Department'){
            addDepartment();
        }

        if (choices === 'Exit'){
            connection.end;
        }
    });
};

//View all Employees
function viewAllEmployees(){
    connection.query("SELECT * FROM employee", function (err,data){
        console.table(data);
        askQuestions;
    })
};

//view all departments
function viewAllDepartments(){
    connection.query("SELECT * FROM department", function (err,data){
        console.table(data);
        askQuestions;
    })
};

//add Employee
function addEmployee() {
    inquirer.prompt([{
        type:"input",
        name:"firstName",
        message:"What is the employye's first name?"
    },
    {
        type:"input",
        name:"lastName",
        message:"What is the employye's last name?"
    },
    {
        type:"number",
        name:"roleId",
        message:"What is the employee's role ID?"
    },
    {
        type:"number",
        name:"managerId",
        message:"What is the employee's manager's ID?"
    },
])
}

