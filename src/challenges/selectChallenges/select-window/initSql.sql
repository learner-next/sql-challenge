CREATE TABLE IF NOT EXISTS `employees` (
    employee_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary INT(11) NOT NULL,
    department_id INT(11) NOT NULL
);

INSERT INTO `employees` (employee_id, first_name, last_name, salary, department_id) VALUES (
    1,
    'John',
    'Doe',
    100000,
    100
);

INSERT INTO `employees` (employee_id, first_name, last_name, salary, department_id) VALUES (
    2,
    'Steven',
    'King',
    120000,
    100
);

INSERT INTO `employees` (employee_id, first_name, last_name, salary, department_id) VALUES (
    3,
    'Nancy',
    'Greenberg',
    120000,
    101
);

INSERT INTO `employees` (employee_id, first_name, last_name, salary, department_id) VALUES (
    4,
    'Steven',
    'Stevenson',
    80000,
    102
);

INSERT INTO `employees` (employee_id, first_name, last_name, salary, department_id) VALUES (
    5,
    'Christopher',
    'Columbus',
    80000,
    102
);

INSERT INTO `employees` (employee_id, first_name, last_name, salary, department_id) VALUES (
    6,
    'John',
    'Smith',
    80000,
    100
);
