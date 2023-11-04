CREATE TABLE IF NOT EXISTS customers (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birthday DATE NOT NULL
);

INSERT INTO user (name, age, email, password) VALUES(
    "小明", 20, "144798098@qq.com", "1234xyz"
);
INSERT INTO user (name, age, email, password) VALUES(
    "小丽", 18, "beauty_girl@gmail.com", "zsd6799"
);
INSERT INTO user (name, age, email, password) VALUES(
    "小王", 28, "zshx@163.com", "wang123289"
);
INSERT INTO user (name, age, email, password) VALUES(
    "小李", 36, "tsxkill@hotmail.com", "li3333"
);