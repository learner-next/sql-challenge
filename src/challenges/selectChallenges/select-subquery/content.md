# 高级查询 - 子查询

## 简介

在 SQL 中，**一个查询可以嵌套在另一个查询中**。嵌套的查询被称为 “子查询” 或 “子句”。
**子查询可以用于从一个查询中检索数据，然后在另一个查询中使用这些数据。**

### 1. 基本的子查询

子查询可以在 WHERE、FROM 和 SELECT 子句中使用。一个常见的使用场景是在 WHERE 子句中使用子查询，以过滤外部查询的结果。

示例： 从 orders 表中选择所有订单金额超过平均订单金额的订单。

```sql
SELECT * FROM orders WHERE amount > (SELECT AVG(amount) FROM orders);
```

这里，子查询 (SELECT AVG (amount) FROM orders) 计算了 orders 表中所有订单的平均金额。

### 2. FROM 子句中的子查询

当你需要从一个派生的表（即一个查询的结果）中选择数据时，可以在 FROM 子句中使用子查询。

示例： 选择公司中薪水超过平均薪水的员工的姓名和薪水。

```sql
SELECT emp_name, salary
FROM
    (SELECT emp_name, salary, AVG(salary) as avg_salary FROM employees) AS subquery
WHERE salary > avg_salary;
```

### 3. SELECT 子句中的子查询

子查询也可以在 SELECT 子句中用作列的一部分。

示例： 对于每一个客户，选择他们的 ID 和他们的订单数量。

```sql
SELECT customer_id,
(SELECT COUNT(*) FROM orders WHERE orders.customer_id = customers.customer_id)
AS order_count FROM customers;
```

### 4. 子查询与连接的对比

子查询有时可以替代连接，但它们之间的性能可能会有很大的差异。一般来说，连接可能更快，尤其是当处理大量数据时。
然而，子查询在某些情况下可能更易于理解和编写。

### 5. 存在和相关子查询

子查询还可以与 `EXISTS` 或 `NOT EXISTS` 运算符结合使用，以检查子查询是否返回任何结果。

示例： 选择至少有一个订单的所有客户。

```sql
SELECT * FROM customers
WHERE EXISTS (SELECT * FROM orders WHERE orders.customer_id = customers.customer_id);
```

从上面这些使用场景中可以看出子查询的重要性，它可以让我们在一个查询中使用另一个查询的结果，从而实现更加复杂的查询。

接下来我们来看一个示例。

## 示例

假设我们已经有一张名为 `fruit` 表，表中包含水果的 `name`，`price`，`supplier` 等字段。

`fruit` 表如下：
| name | price | supplier |
| ---- | ----- | -------- |
| 苹果 | 5.00 | 供应商 A |
| 香蕉 | 4.00 | 供应商 B |
| 梨 | 4.00 | 供应商 C |
| 西瓜 | 2.00 | 供应商 E |
| 苹果 | 3.00 | 供应商 B |
| 香蕉 | 3.00 | 供应商 A |
| 梨 | 6.00 | 供应商 D |

接下来我们想要获取供应商中大于供应商 A 的平均价格的供应商的名称，那么我们可以使用子查询来进行查询，如下：

```sql
SELECT supplier FROM fruit
WHERE price > (SELECT AVG (price) FROM fruit WHERE supplier = ' 供应商 A');
```

可以得到如下的结果：

| supplier |
| -------- |
| 供应商 B |
| 供应商 D |

可以看到，我们成功的获取了供应商中大于供应商 A 的平均价格的供应商的名称。

子查询的技巧一般是先把需要的子查询写出来，然后再把外层的查询写出来，这样就可以很容易的写出想要的子查询了。

## 挑战

假设我们已经有一张学生表 `student`，包含以下字段：`name（姓名）`、`class（班级）`、`subject（学科）`、`score（成绩）`。请你编写一个 SQL 子查询，查询每个学生大于班级平均成绩的学科，返回 `name` 和 `subject` 和 `score`。

PS（数据表已经创建好了，你可以在右下侧查看数据表中查看数据以及其他相关信息）
