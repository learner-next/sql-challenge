CREATE TABLE IF NOT EXISTS `employees` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    salary INT NOT NULL
);

INSERT INTO `employees` (name, salary) VALUES ('Alice', 6000);
INSERT INTO `employees` (name, salary) VALUES ('Bob', 2000);
INSERT INTO `employees` (name, salary) VALUES ('Charlie', 8000);

CREATE TABLE IF NOT EXISTS `departments` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

INSERT INTO `departments` (name) VALUES ('Sales');
INSERT INTO `departments` (name) VALUES ('Marketing');
INSERT INTO `departments` (name) VALUES ('Engineering');

