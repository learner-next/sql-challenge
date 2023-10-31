CREATE TABLE IF NOT EXISTS `student` (
  id INTEGER AUTOINCREMENT,
  name VARCHAR(256) NOT NULL,
  age INT NOT NULL,
  gender CHAR(4) NOT NULL,
  birthday DATE NULL,
  address VARCHAR(256) NULL,
  PRIMARY KEY (id)
);
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小明', 20, '男', '1998-12-20', null);
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小丽', 18, '女', null, '上海市浦东区');
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小王', 28, '男', '1997-08-11', '北京市海淀区');
INSERT INTO `student` (name, age, gender, birthday, address)
VALUES ('小李', 36, '男', '1989-02-18', '北京市朝阳区');
