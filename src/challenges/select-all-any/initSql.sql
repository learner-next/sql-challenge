CREATE TABLE IF NOT EXISTS `products` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT NOT NULL,
    price INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `sales` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT NOT NULL,
    sale_price INT NOT NULL
);

INSERT INTO `products` (product_name, price) VALUES ('iPhone', 8000);
INSERT INTO `products` (product_name, price) VALUES ('iPad', 5000);
INSERT INTO `products` (product_name, price) VALUES ('iMac', 10000);
INSERT INTO `products` (product_name, price) VALUES ('iWatch', 3000);

INSERT INTO `sales` (product_name, sale_price) VALUES ('iPhone', 9000);
INSERT INTO `sales` (product_name, sale_price) VALUES ('iPad', 5000);
INSERT INTO `sales` (product_name, sale_price) VALUES ('iMac', 12000);
INSERT INTO `sales` (product_name, sale_price) VALUES ('iWatch', 4000);