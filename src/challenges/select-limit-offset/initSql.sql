CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    class VARCHAR(30) NOT NULL,
    subject VARCHAR(30) NOT NULL,
    score INTEGER NOT NULL
);

INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'Alice', 'A', 'English', 90
);
INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'Bob', 'A', 'English', 78
);
INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'Charlie', 'B', 'Math', 98
);
INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'David', 'C', 'Math', 86
);
INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'Eric', 'C', 'Math', 80
);
INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'Frank', 'D', "English", 70
);
INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'George', 'D', "Math", 80
);
INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'Henry', 'E', "Math", 70
);
INSERT INTO `student` (
    name, class, subject, score
) VALUES (
    'Ivan', 'E', "English", 90
);