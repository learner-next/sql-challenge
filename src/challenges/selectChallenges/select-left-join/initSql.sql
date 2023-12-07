CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INT NOT NULL,
    class_name VARCHAR(20) NOT NULL,
    score INT NOT NULL
);

INSERT INTO `student` (name, age, class_name, score) VALUES ('Alice', 18, 'A', 90);
INSERT INTO `student` (name, age, class_name, score) VALUES ('Bob', 19, 'A', 89);
INSERT INTO `student` (name, age, class_name, score) VALUES ('Charlie', 24, 'B', 87);
INSERT INTO `student` (name, age, class_name, score) VALUES ('David', 27, 'B', 78);
INSERT INTO `student` (name, age, class_name, score) VALUES ('Eve', 23, 'C', 92);
INSERT INTO `student` (name, age, class_name, score) VALUES ('Frank', 22, 'F', 82);

CREATE TABLE IF NOT EXISTS `class_info` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    teacher TEXT NOT NULL
);

INSERT INTO `class_info` (id, name, teacher) VALUES (1, 'A', 'Mr. Smith');
INSERT INTO `class_info` (id, name, teacher) VALUES (2, 'B', 'Mrs. Jones');
INSERT INTO `class_info` (id, name, teacher) VALUES (3, 'C', 'Mr. Johnson');
INSERT INTO `class_info` (id, name, teacher) VALUES (4, 'D', 'Mrs. Williams');
