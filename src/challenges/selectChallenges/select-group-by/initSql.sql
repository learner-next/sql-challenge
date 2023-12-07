CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    className VARCHAR(30) NOT NULL,
    subject VARCHAR(30) NOT NULL,
    score INTEGER NOT NULL
);

INSERT INTO `student` (
    name, className, subject, score
) VALUES (
    'Alice', 'A', 'English', 90
);
INSERT INTO `student` (
    name, className, subject, score
) VALUES (
    'Bob', 'A', 'English', 78
);
INSERT INTO `student` (
    name, className, subject, score
) VALUES (
    'Charlie', 'B', 'Math', 98
);
INSERT INTO `student` (
    name, className, subject, score
) VALUES (
    'David', 'C', 'Math', 86
);
INSERT INTO `student` (
    name, className, subject, score
) VALUES (
    'Eric', 'C', 'Math', 80
);
INSERT INTO `student` (
    name, className, subject, score
) VALUES (
    'Frank', 'C', "English", 70
);