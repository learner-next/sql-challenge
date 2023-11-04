# 删除 - DELETE VALUES

## 简介

这一节我们介绍一下如何删除表中的数据。

但是有时候我们的业务中需要删除表中的数据，比如说我们的用户注销了账号，我们就需要删除用户的数据。

### 删除数据语法

```sql
DELETE FROM table_name WHERE condition;
```

Condition 是可选的，如果没有指定，那么所有的行都会被删除。**注意：如果没有指定 Condition，那么所有的行都会被删除！**

比如说，我们想要删除 `customers` 表中 `name` 为 `John` 的行，我们可以这样写：

```sql
DELETE FROM customers WHERE name = 'John';
```

### 删除多行数据

我们也可以删除多行数据，比如说，我们想要删除 `customers` 表中 `name` 为 `John` 或者 `name` 为 `Mary` 的行，我们可以这样写：

```sql
DELETE FROM customers WHERE name = 'John' OR name = 'Mary';
```

删除数据量的多少取决于你的 Condition，Condition 越精确，删除的数据量就越少。不填写 Condition 的话，所有的行都会被删除。

所以使用 DELETE 语句的时候一定要小心，一定要确认你的 Condition 是正确的，否则可能会导致数据丢失。

### 删除所有行

如果我们想要删除表中的所有行，我们可以这样写：

```sql
DELETE FROM customers;
```

这样会删除表中的所有行，但是**表结构不会被删除**。

接下来请完成下面的挑战吧～

## 挑战

假设我们有一个 `users` 表，它有 `id`、`name`、`email` 和 `password` 列。

请删除 `users` 表中 `name` 为 `小王` 和 `小李` 的数据。
