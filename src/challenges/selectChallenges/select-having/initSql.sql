CREATE TABLE IF NOT EXISTS `student` (
  `id` INT AUTOINCREMENT NOT NULL,
  `name` varchar(255) NOT NULL,
  `className` VARCHAR(20) NOT NULL,
  `score` INT NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Alice', 'A', 70
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Bob', 'A', 80
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Charlie', 'B', 90
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'David', 'A', 80
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Eve', 'B', 78
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Frank', 'C', 90
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Grace', 'C', 85
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Heidi', 'D', 75
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Grace', 'E', 18
);

INSERT INTO `student` (
  name, className, score
) VALUES (
  'Heidi', 'E', 20
);