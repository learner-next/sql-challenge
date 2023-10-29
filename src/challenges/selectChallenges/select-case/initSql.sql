CREATE TABLE IF NOT EXISTS `student` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(256) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    address VARCHAR(256) NOT NULL
);

INSERT INTO `student` (name, age, gender, address) VALUES (
    '小王', 18, '男', '北京市海淀区'
);
INSERT INTO `student` (
    name, age, gender, address
) VALUES (
    '小李', 19, '女', '北京市朝阳区'
);
INSERT INTO `student` (
    name, age, gender, address
) VALUES (
    '小张', 26, '男', '上海市浦东区'
);
INSERT INTO `student` (
    name, age, gender, address
) VALUES (
    '小赵', 22, '女', '上海市黄浦区'
);
INSERT INTO `student` (
    name, age, gender, address
) VALUES (
    '小孙', 28, '男', '广州市天河区'
);