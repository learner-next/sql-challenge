CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INT NOT NULL,
    class VARCHAR(20) NOT NULL,
    score INT NOT NULL
);

INSERT INTO `student` (name, age, class, score) VALUES ('Alice', 18, 'A', 90);
INSERT INTO `student` (name, age, class, score) VALUES ('Bob', 19, 'A', 89);
INSERT INTO `student` (name, age, class, score) VALUES ('Charlie', 24, 'B', 87);
INSERT INTO `student` (name, age, class, score) VALUES ('David', 27, 'B', 78);
INSERT INTO `student` (name, age, class, score) VALUES ('Eve', 23, 'C', 92);
INSERT INTO `student` (name, age, class, score) VALUES ('Frank', 22, 'F', 82);

CREATE TABLE IF NOT EXISTS `class` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    teacher TEXT NOT NULL
);

INSERT INTO `class` (id, name, teacher) VALUES (1, 'A', 'Mr. Smith');
INSERT INTO `class` (id, name, teacher) VALUES (2, 'B', 'Mrs. Jones');
INSERT INTO `class` (id, name, teacher) VALUES (3, 'C', 'Mr. Johnson');
INSERT INTO `class` (id, name, teacher) VALUES (4, 'D', 'Mrs. Williams');
