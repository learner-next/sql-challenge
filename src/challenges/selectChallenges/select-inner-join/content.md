# 关联查询 - INNER JOIN

## 介绍

这一节我们介绍关联查询，关联查询是数据库中非常重要的一部分，也是我们在实际工作中经常使用的一部分。

关联查询是指在查询的时候，我们可以通过 ** 这些表之间的关联列 **，** 将多个表中的数据关联起来，然后一次性查询出来 **。

首先我们先介绍 join 语句，join 语句是关联查询的基础，我们先从 join 语句开始学习。

### join 语句

```sql
SELECT * FROM table1 [INNER|LEFT|RIGHT|SELF|FULL]JOIN table2 ON table1.column = table2.column;
```

首先从两个表中查询出所有的数据，然后再将这两个表中的数据通过 `ON` 后面的条件进行关联，最后将关联后的数据返回。

### 类型

1. 内连接（inner join）
2. 左连接（left join）
3. 右连接（right join）
4. 全连接（full join）
5. 自连接（self join）
6. 交叉连接（cross join）

这一节我们重点讲解内连接，接下来我们也会讲解和练习剩下的其他类型。但是它们的语法都是类似的，只是关联的方式不同。

### 内连接

`INNER JOIN` 只返回两个表中满足关联条件的交集部分，即在两个表中都存在的匹配行。

内连接是最常用的一种连接方式，使用关键字 `JOIN`(**`INNER` 通常可以省略 **)，它的语法如下：

```sql
SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;
```

## 示例

假设我们有一个 `users` 表，里面存储了 user 的信息，包括 id、name、age、gender、address、phone 等字段。
还有一个 `orders` 表，里面存储了订单的信息，包括 id、user_id、order_no、order_time、order_amount 等字段。

现在我们需要查询出所有的订单信息，包括订单的 id、订单号、订单时间、订单金额、用户 id、用户姓名、用户年龄、用户性别、用户地址、用户电话等信息。

```sql
SELECT o.id o_id, order_no, order_time, order_amount, u.id u_id, name, age, gender, address, phone
FROM orders o JOIN users u ON o.user_id = u.id;
```

关联查询的时候如果有相同的字段名，我们需要给字段名起别名，否则会报错。AS 是可以省略的。同时一般我们会给表名也起别名，这样可以简化 SQL 语句。

接下来完成下面的挑战吧～

## 挑战

假设我们有一个 `student` 表， 表中包含了学生的 `id`, `name`, `age`, `class_id` 等字段，还有一个 `class` 表，表中包含了班级的 `id`, `name`, `teacher` 等字段。

现在我们需要查询出所有的学生信息，包括学生的 `id`、`s_name`、`age`、`class_id`、`class_name`、`teacher` 等信息，请你来完成挑战吧～
