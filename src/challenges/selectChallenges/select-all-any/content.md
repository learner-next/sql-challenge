# 高级查询 - ANY 和 ALL

## 简介

上一节我们学习了子查询，子查询可以提前计算出一个结果集，然后再将这个结果集作为一个表来使用。这一节我们来学习另外一种子查询，它可以将一个结果集中的每一行与外部查询中的每一行进行比较，这种子查询就是 `ANY/ALL` 子查询。

### 1. `ANY` 运算符

`ANY` 运算符用于 ** 将一个结果集中的每一行 ** 与 ** 外部查询中的每一行 ** 进行比较，** 如果有 _ 任意一行 _ 满足条件 **，则返回 `TRUE`，否则返回 `FALSE`。

```sql
SELECT * FROM t1 WHERE col1 > ANY (SELECT col2 FROM t2);
```

上面的查询语句中，`ANY` 子查询返回的所有结果集（每一行）都会与 `t1` 表中的每一行进行比较，如果有任意一行满足 `col1 > col2` 的条件，则返回 `TRUE`，否则返回 `FALSE`。 可以这么理解，就是主查询中的每一行都会对应子查询的所有行，如果有任意一行满足条件，则返回 `TRUE`。

### 2. `ALL` 运算符

`ALL` 运算符用于 ** 将一个结果集中的每一行 ** 与 ** 外部查询中的每一行 ** 进行比较，** 如果 _ 所有行 _ 都满足条件 **，则返回 `TRUE`，否则返回 `FALSE`。

```sql
SELECT * FROM t1 WHERE col1 > ALL (SELECT col2 FROM t2);
```

上面的查询语句中，`ALL` 子查询返回的所有结果集（每一行）都会与 `t1` 表中的每一行进行比较，如果所有行都满足 `col1 > col2` 的条件，则返回 `TRUE`，否则返回 `FALSE`。 可以这么理解，就是主查询中的每一行都会对应子查询的所有行，如果所有行都满足条件，则返回 `TRUE`。

### 3. 与其他 SQL 运算符的结合

`ANY` 和 `ALL` 可以与 SQL 的其他运算符（如 =, >, < 等）结合使用，以满足不同的查询需求。

### 4. 注意事项

- 使用 `ANY` 和 `ALL` 时，子查询必须返回 ** 一列 ** 数据。如果子查询返回多列数据，你会得到一个错误。

- 当子查询没有返回任何数据时，`ALL` 运算符将返回 `TRUE`，而 `ANY` 运算符将返回 `FALSE`。

接下来我们看一个示例

## 示例

假设我们有一个 `products` 表，表中包含 `product_name`, `price`, `category` 三个字段，而 `sales` 表中包含 `product_name`, `sale_price` 两个字段，我们想要查询出价格高于任意产品售价的产品，我们可以这样写：

products 表

| product_name | price | category |
| ------------ | ----- | -------- |
| iPhone       | 8000  | phone    |
| iPad         | 5000  | pad      |
| iMac         | 10000 | computer |
| iWatch       | 3000  | watch    |

sales 表

| product_name | sale_price |
| ------------ | ---------- |
| iPhone       | 9000       |
| iPad         | 5000       |
| iMac         | 12000      |
| iWatch       | 4000       |

```sql
SELECT product_name, price FROM products WHERE price > ANY (SELECT sale_price FROM sales);
```

上面的查询语句可以查询到如下结果：

| product_name | price |
| ------------ | ----- |
| iPhone       | 8000  |
| iPad         | 5000  |
| iMac         | 10000 |

首先通过 `SELECT AVG (sale_price) FROM sales` 查到所有的 sale_price, 接着将 product 表中的每一行的 price 与这个结果集中的每一行进行比较，发现只有 3000 没有匹配上，故返回其他值。

接下来我们完成以下的挑战吧～

## 挑战

假设我们有一个 `products` 表，表中包含 `product_name`, `price`, `category` 三个字段，而 `sales` 表中包含 `product_name`, `sale_price` 两个字段，我们想要查询出 `products` 表中价格不等于 `sales` 表任意产品价格的产品，返回 `product_name` 和 `price` 两个字段，你能完成这个查询吗？
