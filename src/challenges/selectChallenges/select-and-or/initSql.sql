CREATE TABLE IF NOT EXISTS `student` (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(256) NOT NULL,
  age INT NOT NULL,
  gender CHAR(4) NOT NULL,
  birthday DATE NULL,
  address VARCHAR(256) NULL
);

INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小明', 20, '男', '1998-12-20', null);
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小丽', 18, '女', null, '上海市');
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小王', 28, '男', '1997-08-11', '北京市');
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小李', 36, '男', '1989-02-18', '北京市');
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小宁', 16, '男', '2002-06-12', null);
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小张', 32, '男', null, '广东省');
