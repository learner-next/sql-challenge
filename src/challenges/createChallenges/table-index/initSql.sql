CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTOINCREMENT,
    name VARCHAR(256) NOT NULL,
    card_id INT NOT NULL,
    address VARCHAR(256) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE INDEX name_index ON users (name);

CREATE UNIQUE INDEX card_id_index ON users (card_id);