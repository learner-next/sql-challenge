CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INT NOT NULL,
    class_id INT NOT NULL
);

INSERT INTO `student` (name, age, class_id) VALUES ('Alice', 18, 1);
INSERT INTO `student` (name, age, class_id) VALUES ('Bob', 19, 1);
INSERT INTO `student` (name, age, class_id) VALUES ('Charlie', 24, 2);
INSERT INTO `student` (name, age, class_id) VALUES ('David', 27, 2);
INSERT INTO `student` (name, age, class_id) VALUES ('Eve', 23, 3);

CREATE TABLE IF NOT EXISTS `class` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    teacher TEXT NOT NULL
);

INSERT INTO `class` (id, name, teacher) VALUES (1, 'Math', 'Mr. Smith');
INSERT INTO `class` (id, name, teacher) VALUES (2, 'English', 'Mrs. Jones');
INSERT INTO `class` (id, name, teacher) VALUES (3, 'Science', 'Mr. Johnson');
INSERT INTO `class` (id, name, teacher) VALUES (4, 'History', 'Mrs. Williams');
