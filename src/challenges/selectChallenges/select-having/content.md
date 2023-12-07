# 高级查询 - HAVING

## 简介

在 SQL 中，`HAVING` 子句用于对 `GROUP BY` 子句的结果进行过滤。当你使用聚合函数，如 `SUM`, `AVG`, `COUNT` 等，并想对其结果进行过滤时，你不能直接使用 `WHERE` 子句，这时候 `HAVING` 就派上用场了。

**HAVING 子句与条件查询 WHERE 子句的区别在于，WHERE 子句用于在 分组之前 进行过滤，而 HAVING 子句用于在 分组之后 进行过滤。**

### 1. `HAVING` 的基本用法

```sql
SELECT column1, column2, aggregate_function(column3)
FROM table_name
GROUP BY column1, column2
HAVING condition;
```

比如，我们想要查询每个部门的平均工资大于 5000 的部门，可以这样写：

```sql
SELECT department, AVG(salary) as avg_salary
FROM employee
GROUP BY department
HAVING avg_salary > 5000;
```

注意，你不能在 `WHERE` 子句中直接过滤 `avg_salary`，因为它是一个聚合结果。

### 2. `HAVING` 与 `WHERE` 的区别

- `WHERE` 子句是在聚合前过滤记录，只包括满足条件的记录。
- `HAVING` 子句是在聚合后过滤聚合结果。

示例： 从 orders 表中选择 2022 年总订单金额超过 500 的客户。

```sql
SELECT customer_id, SUM(amount) as total_amount
FROM orders
WHERE order_date >= '2022-01-01' AND order_date < '2023-01-01'
GROUP BY customer_id
HAVING total_amount > 500;
```

首先，`WHERE` 子句过滤出 2022 年的订单，然后 `GROUP BY` 对客户进行分组并计算总金额，最后 `HAVING` 过滤出总金额超过 `500` 的结果。

### 3. `HAVING` 与多个聚合函数

`HAVING` 子句可以与多个聚合函数一起使用，比如，我们想要查询每个部门的平均工资大于 5000，最高工资大于 10000 的部门，可以这样写：

```sql
SELECT department, AVG(salary) as avg_salary, MAX(salary) as max_salary
FROM employee
GROUP BY department
HAVING avg_salary > 5000 AND max_salary > 10000;
```

### 4. 注意事项

`HAVING` 子句通常与 `GROUP BY` 子句一起使用，但 `GROUP BY` 不是必需的。如果省略 `GROUP BY`，`HAVING` 会作用于整个查询结果。

在 `HAVING` 中使用的任何列必须在 `SELECT` 语句中出现或是一个有效的聚合。

接下来请完成以下的挑战吧～

## 挑战

假设我们有一个 `student` 表，表中包含 `className` 和 `score` 三个字段，现在我们想要查询每个班级的平均分大于 80 的学生或者小于 20 人的学生信息并返回 `className` 和 `avg_score` 字段，并按照 `avg_score` 进行降序序返回。
PS: 请使用 `HAVING` 子句完成查询。
