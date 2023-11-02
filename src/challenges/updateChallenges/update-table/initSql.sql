CREATE TABLE IF NOT EXISTS user (
  id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  gender CHAR(4) NOT NULL,
  email VARCHAR(255) NOT NULL
);

INSERT INTO user (
  name, age, gender, email
) VALUES (
  '小王', 20, '男', '627860289@qq.com'
);
