CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INT NOT NULL,
    course TEXT NOT NULL
);

INSERT INTO `student` (name, age, course) VALUES ('Alice', 18, 'Math');
INSERT INTO `student` (name, age, course) VALUES ('Bob', 19, 'Math');
INSERT INTO `student` (name, age, course) VALUES ('Charlie', 24, 'English');
INSERT INTO `student` (name, age, course) VALUES ('David', 27, 'English');
INSERT INTO `student` (name, age, course) VALUES ('Eve', 23, 'Science');
INSERT INTO `student` (name, age, course) VALUES ('ToM', 23, 'Computer');

CREATE TABLE IF NOT EXISTS `score_info` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    score INT NOT NULL
);

INSERT INTO `score_info` (
    name,
    score
) VALUES (
    'Alice',
    90
);

INSERT INTO `score_info` (
    name,
    score
) VALUES (
    'Bob',
    80
);

INSERT INTO `score_info` (
    name,
    score
) VALUES (
    'Charlie',
    70
);

INSERT INTO `score_info` (
    name,
    score
) VALUES (
    'David',
    60
);

INSERT INTO `score_info` (
    name,
    score
) VALUES (
    'Eve',
    50
);

INSERT INTO `score_info` (
    name,
    score
) VALUES (
    'Tony',
    100
);


