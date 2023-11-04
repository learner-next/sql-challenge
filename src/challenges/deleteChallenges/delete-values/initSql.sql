CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, age, email, password) VALUES(
    "小明", 20, "144798098@qq.com", "1234xyz"
);
INSERT INTO users (name, age, email, password) VALUES(
    "小丽", 18, "beauty_girl@gmail.com", "zsd6799"
);
INSERT INTO users (name, age, email, password) VALUES(
    "小王", 28, "zshx@163.com", "wang123289"
);
INSERT INTO users (name, age, email, password) VALUES(
    "小李", 36, "tsxkill@hotmail.com", "li3333"
);