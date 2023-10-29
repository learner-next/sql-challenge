# 高级查询 - 子查询 - EXISTS

## 简介

在 SQL 中，EXISTS 是一个用于测试**子查询**是否返回任何行的布尔运算符。它是一种高效的方式来检查一个子查询是否至少有一个结果。

### 1. `EXISTS` 的基本用法

```sql
SELECT column1, column2, ...
FROM table_name
WHERE EXISTS (subquery);
```

如果子查询返回**至少一行数据**，`EXISTS` 运算符返回 `TRUE`，否则返回 `FALSE`。

示例： 从 products 表中选择至少有一次销售记录的产品。

```sql
SELECT product_name FROM products
WHERE EXISTS (SELECT * FROM sales WHERE products.product_id = sales.product_id);
```

子查询检查 `sales` 表中是否存在与 `products` 表相对应的记录。如果存在，`EXISTS` 返回 `TRUE`。

### 2. `NOT EXISTS`

你可以使用 `NOT EXISTS` 来测试子查询是否不返回任何结果。

示例： 从 products 表中选择没有销售记录的产品。

```sql
SELECT product_name FROM products
WHERE NOT EXISTS (SELECT * FROM sales WHERE products.product_id = sales.product_id);
```

### 3. `EXISTS` 与 `IN` 的区别

**当你想知道某个集合中是否包含特定的值时，IN 是一个选择。但当你需要根据另一个表的数据来过滤结果时，EXISTS 可能更高效。**

示例： 使用 IN 选择有销售记录的产品。

```sql
SELECT product_name FROM products
WHERE product_id IN (SELECT product_id FROM sales);
```

虽然上述查询可以工作，但在某些数据库系统中，使用 `EXISTS` 可能会更快，因为它在找到第一个匹配时就停止搜索。

### 4. 注意事项

在使用 `EXISTS` 时，子查询的选择列表并不重要，因为它只检查行是否存在。因此，**通常选择 1 或其他任意值**。

`EXISTS` 的效率通常比其他方法高，特别是与大数据集合比较时。

接下来请完成一下的挑战吧～

## 挑战

假设我们又一张学生表，包含 `name` `class` `score` 三个字段，而有另外一张班级表，包含 `class_name`, `teacher` 两个字段，现在需要写出SQL查询出**不在班级表中**的学生的所有信息。

PS（你可以在右下侧看到两张表的展示以及对应的建表语句，两张表联合查询出来了展示了）
