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
    database: 'employeeTracker'
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
                'Update Employee Role',
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

        if (choices === 'Add Role'){
            addRole();
        }


        if (choices === 'Add Department'){
            addDepartment();
        }

        if (choices === 'Exit'){
            connection.end();
        }
    });
};

//View all Employees
function viewAllEmployees(){
    connection.query("SELECT * FROM employee", function (err,data){
        console.table(data);
        askQuestions();
    })
};

//view all departments
function viewAllDepartments(){
    connection.query("SELECT * FROM department", function (err,data){
        console.table(data);
        askQuestions()
        ;
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
        message:"What is the employee's last name?"
    },
    {
        type:"input",
        name:"roleId",
        message:"What is the employee's role id?"
    },
    {
        type:"input",
        name:"managerId",
        message:"What is the employee's manager's ID  ?"
    },
]).then(function(res){
    connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`, [res.firstName, res.lastName, res.roleID, res.managerID], function(err,data){
        if (err) throw err;
        console.table("Suncessful Input");
        askQuestions();
    });
});
};


//add Department
function addDepartment(){
    inquirer.prompt([{
        type:"input",
        name:"department",
        message:"What deparment would you like to add?"
    },
]).then(function(res){
    connection.query(`INSERT INTO department (department_name) VALUES(?)`, [res.department], function(err,data){
        if (err) throw err;
        console.table("Successful Input");
        askQuestions();
    })
});
};

//add role
function addRole(){
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, 
        {
            message: "enter salary (no commas):",
            type: "number",
            name: "salary"
        }, 
        {
            message: "enter department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        askQuestions();
    });

};

//add update employee
function updateEmployeeRole() {
    inquirer.prompt([
        {
            message: "which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name"
        }, {
            message: "enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
            console.table(data);
        })
        askQuestions();
    });

};