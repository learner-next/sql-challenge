CREATE TABLE IF NOT EXISTS `student` (
  `id` INT AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `class` VARCHAR(20) NOT NULL,
  `score` INT NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Alice', 'A', 70
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Bob', 'A', 80
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Charlie', 'B', 90
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'David', 'A', 80
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Eve', 'B', 78
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Frank', 'C', 90
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Grace', 'C', 85
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Heidi', 'D', 75
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Grace', 'E', 18
);

INSERT INTO `student` (
  name, class, score
) VALUES (
  'Heidi', 'E', 20
);