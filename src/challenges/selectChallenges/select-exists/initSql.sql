CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    class TEXT NOT NULL,
    score INTEGER NOT NULL
);

INSERT INTO `student` (name, class, score) VALUES ('Alice', 'A', 50);
INSERT INTO `student` (name, class, score) VALUES ('Bob', 'B', 48);
INSERT INTO `student` (name, class, score) VALUES ('Charlie', 'C', 49);
INSERT INTO `student` (name, class, score) VALUES ('David', 'D', 50);
INSERT INTO `student` (name, class, score) VALUES ('Eve', 'E', 47);
INSERT INTO `student` (name, class, score) VALUES ('Frank', 'F', 49);

CREATE TABLE IF NOT EXISTS `class` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_name TEXT NOT NULL,
    teacher TEXT NOT NULL
);

INSERT INTO `class` (class_name, teacher) VALUES ('A', 'Mr. Smith');
INSERT INTO `class` (class_name, teacher) VALUES ('B', 'Mrs. Jones');
INSERT INTO `class` (class_name, teacher) VALUES ('D', 'Mr. Brown');
INSERT INTO `class` (class_name, teacher) VALUES ('F', 'Mrs. Davis');
