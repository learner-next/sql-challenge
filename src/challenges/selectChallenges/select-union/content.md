# 基本查询 - UNION 和 UNION ALL

## 简介

SQL 是一种用于管理关系数据库的编程语言。在本教程中，我们将介绍 SQL 的两个重要命令：`UNION` 和 `UNION ALL`。

1. `UNION`
   `UNION` 命令用于 **合并两个或多个** `SELECT` 语句的结果集。但是，它会 **删除重复的行**。以下是 `UNION` 的基本语法：

```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

请注意，UNION 内部的每个 SELECT 语句必须具有相同数量的列。列也必须具有相似的数据类型，并且必须按照相同的顺序。

2. `UNION ALL`

与 `UNION` 类似，`UNION ALL` 也用于 **合并两个** `SELECT` 语句的 **结果集**。但是，与 `UNION` 不同，`UNION ALL` 会 **保留所有重复的行**。以下是 `UNION ALL` 的基本语法：

```sql
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;
```

同样，UNION ALL 内部的每个 SELECT 语句也必须具有相同数量的列。列也必须具有相似的数据类型，并且必须按照相同的顺序。

接下来我们看一个示例

## 示例

假设我们有两个表：`customers` 和 `suppliers`。`customers` 表包含客户的 `id`、`name` 和 `city`。`suppliers` 表包含供应商的 `id`、`name` 和 `city`。以下是 `customers` 表的内容：

| id  | name        | city     |
| --- | ----------- | -------- |
| 1   | John Doe    | New York |
| 2   | Jane Doe    | Beijing  |
| 3   | Alice Jones | Paris    |

以下是 `suppliers` 表的内容：

| id  | name        | city     |
| --- | ----------- | -------- |
| 1   | Peter Smith | London   |
| 2   | Amy Zhao    | Shanghai |
| 3   | Jane Doe    | Beijing  |

现在，我们想要获取所有客户和供应商的 `name` 和 `city`。我们可以使用 `UNION` 命令来完成此操作，如下所示：

```sql
SELECT name, city FROM customers
UNION
SELECT name, city FROM suppliers;
```

结果如下：

| name        | city     |
| ----------- | -------- |
| John Doe    | New York |
| Jane Doe    | Beijing  |
| Alice Jones | Paris    |
| Peter Smith | London   |
| Amy Zhao    | Shanghai |

请注意，`UNION` 命令删除了重复的行。

接下来请完成以下的挑战吧～

## 挑战

请结合上面👆的示例去查询数据表中所有行的数据，分别查询 `student` 表和 `teacher` 表中的 `age` 字段，进行 **不去重** 查询🌈～
PS（数据表已经创建好了，你可以在右下侧查看数据表（结合成一张表展示了）中查看数据以及其他相关信息）
