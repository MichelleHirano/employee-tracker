DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

--employee
CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
);


-- role
CREATE TABLE role(
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,2),
    department_id INTEGER
);


--role
CREATE TABLE department(
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
);