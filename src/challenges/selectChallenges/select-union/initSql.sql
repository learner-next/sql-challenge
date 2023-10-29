CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS `teacher` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
);

INSERT INTO student (name, age) VALUES ('Alice', 20);
INSERT INTO student (name, age) VALUES ('Bob', 21);
INSERT INTO student (name, age) VALUES ('Charlie', 30);
INSERT INTO student (name, age) VALUES ('David', 26);

INSERT INTO teacher (name, age) VALUES ('Eve', 30);
INSERT INTO teacher (name, age) VALUES ('Frank', 31);
INSERT INTO teacher (name, age) VALUES ('Grace', 26);
INSERT INTO teacher (name, age) VALUES ('Helen', 30);
