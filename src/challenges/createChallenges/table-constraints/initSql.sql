CREATE TABLE IF NOT EXISTS class_info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    manager VARCHAR(255) UNIQUE
);

CREATE TABLE IF NOT EXISTS student (
    id INTEGER,
    name VARCHAR(255) NOT NULL,
    age INT NULL DEFAULT 20,
    class_id INTEGER NOT NULL,
    FOREIGN KEY (class_id) REFERENCES class_info(id),
    PRIMARY KEY (id, class_id)
);