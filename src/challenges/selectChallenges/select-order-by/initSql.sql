CREATE TABLE IF NOT EXISTS `fruit` (
  id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50) NOT NULL,
  price FLOAT NOT NULL,
  supplier VARCHAR(256) NOT NULL
);


INSERT INTO `fruit` (
  name, price, supplier
) VALUES ("苹果", 5.0, "供应商A");
INSERT INTO `fruit` (
  name, price, supplier
) VALUES ("香蕉", 4.0, "供应商B");
INSERT INTO `fruit` (
  name, price, supplier
) VALUES ("梨", 4.0, "供应商C");
INSERT INTO `fruit` (
  name, price, supplier
) VALUES ("西瓜", 3.0, "供应商E");
INSERT INTO `fruit` (
  name, price, supplier
) VALUES ("苹果", 6.0, "供应商A");
INSERT INTO `fruit` (
  name, price, supplier
) VALUES ("香蕉", 4.0, "供应商B");
INSERT INTO `fruit` (
  name, price, supplier
) VALUES ("梨", 3.0, "供应商C");
