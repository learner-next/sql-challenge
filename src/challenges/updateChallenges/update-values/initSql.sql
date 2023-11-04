CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(6) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO user (name, age, gender, email, password) VALUES(
    "小明", 20, "男", "144798098@qq.com", "1234xyz"
);
INSERT INTO user (name, age, gender, email, password) VALUES(
    "小丽", 18, "女", "beauty_girl@gmail.com", "zsd6799"
);
INSERT INTO user (name, age, gender, email, password) VALUES(
    "小王", 28, "男", "zshx@163.com", "wang123289"
);
INSERT INTO user (name, age, gender, email, password) VALUES(
    "小李", 36, "男", "tsxkill@hotmail.com", "li3333"
);