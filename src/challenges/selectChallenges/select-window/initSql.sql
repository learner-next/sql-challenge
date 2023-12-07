CREATE TABLE IF NOT EXISTS `employees` (
    employee_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary INT(11) NOT NULL,
    department_id INT(11) NOT NULL
);

INSERT INTO `employees` (first_name, last_name, salary, department_id) VALUES (
    'John',
    'Doe',
    100000,
    100
);

INSERT INTO `employees` (first_name, last_name, salary, department_id) VALUES (
    'Steven',
    'King',
    120000,
    100
);

INSERT INTO `employees` (first_name, last_name, salary, department_id) VALUES (
    'Nancy',
    'Greenberg',
    120000,
    101
);

INSERT INTO `employees` (first_name, last_name, salary, department_id) VALUES (
    'Steven',
    'Stevenson',
    80000,
    102
);

INSERT INTO `employees` (first_name, last_name, salary, department_id) VALUES (
    'Christopher',
    'Columbus',
    80000,
    102
);

INSERT INTO `employees` (first_name, last_name, salary, department_id) VALUES (
    'John',
    'Smith',
    80000,
    100
);
