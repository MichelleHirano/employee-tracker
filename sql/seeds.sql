  INSERT INTO department (department_name)
VALUES
    ('Engineering'),
    ('Management'),
    ('Data');



  INSERT INTO role (title, salary, department_id)
VALUES
    ('Engineer', 50000, 3),
    ('Deparment Manager', 100000, 1),
    ('Analyst', 60000, 3),
    ('Engineer', 50000, 3),
    ('CEO', 200000, 1),
    ('Head Engineer', 150000, 1),
    ('Senior Engineer', 100000, 2),
    ('Senior Engineer', 1000000, 2),
    ('Analyst', 600000, 3),
    ('CFO', 180000, 1);




INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, 1),
    ('Virginia', 'Woolf', 1, 1),
    ('Piers', 'Gaveston', 1, 0),
    ('Charles', 'LeRoi', 2, 1),
    ('Katherine', 'Mansfield', 2, 1),
    ('Dora', 'Carrington', 3, 0),
    ('Edward', 'Bellamy', 3, 0),
    ('Montague', 'Summers', 3, 1),
    ('Octavia', 'Butler', 3, 1),
    ('Unica', 'Zurn', 3, 1);
