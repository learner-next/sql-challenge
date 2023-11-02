CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  department_id INT NOT NULL,
  age INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  address VARCHAR(50) NOT NULL
);


