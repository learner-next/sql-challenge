CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    class_name TEXT NOT NULL,
    score INTEGER NOT NULL
);

INSERT INTO `student` (name, class_name, score) VALUES ('Alice', 'A', 50);
INSERT INTO `student` (name, class_name, score) VALUES ('Bob', 'B', 48);
INSERT INTO `student` (name, class_name, score) VALUES ('Charlie', 'C', 49);
INSERT INTO `student` (name, class_name, score) VALUES ('David', 'D', 50);
INSERT INTO `student` (name, class_name, score) VALUES ('Eve', 'E', 47);
INSERT INTO `student` (name, class_name, score) VALUES ('Frank', 'F', 49);

CREATE TABLE IF NOT EXISTS `class_info` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_name TEXT NOT NULL,
    teacher TEXT NOT NULL
);

INSERT INTO `class_info` (class_name, teacher) VALUES ('A', 'Mr. Smith');
INSERT INTO `class_info` (class_name, teacher) VALUES ('B', 'Mrs. Jones');
INSERT INTO `class_info` (class_name, teacher) VALUES ('D', 'Mr. Brown');
INSERT INTO `class_info` (class_name, teacher) VALUES ('F', 'Mrs. Davis');
