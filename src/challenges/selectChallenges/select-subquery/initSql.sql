CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(256) NOT NULL,
    class VARCHAR(256) NOT NULL,
    subject VARCHAR(256) NOT NULL,
    score INTEGER NOT NULL
);

INSERT INTO student (name, class, subject, score) VALUES ('Alice', 'A', 'Math', 90);
INSERT INTO student (name, class, subject, score) VALUES ('Bob', 'A', 'Math', 80);
INSERT INTO student (name, class, subject, score) VALUES ('Charlie', 'B', 'English', 70);
INSERT INTO student (name, class, subject, score) VALUES ('David', 'B', 'English', 60);
INSERT INTO student (name, class, subject, score) VALUES ('Eve', 'C', 'Chinese', 80);
INSERT INTO student (name, class, subject, score) VALUES ('Fred', 'C', 'Chinese', 90);
INSERT INTO student (name, class, subject, score) VALUES ('Gina', 'C', 'Chinese', 86);
