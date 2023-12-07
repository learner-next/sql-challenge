# 删除 - DELETE COLUMNS

## 简介

这一节我们介绍一下如何删除表中的列。

一般来说我们没必要删除列，因为这样会导致数据丢失。但是如果你确定不会用到而想要删除列，你可以使用 `ALTER TABLE` 语句。

### 语法

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

比如说，我们想要删除 `customers` 表中的 `email` 列，我们可以这样写：

```sql
ALTER TABLE customers DROP COLUMN email;
```

同时，我们也可以删除多个列：

```sql
ALTER TABLE customers DROP COLUMN column1, DROP COLUMN column2, ...;
```

比如说，我们想要删除 `customers` 表中的 `email` 和 `address` 列，我们可以这样写：

```sql
ALTER TABLE customers DROP COLUMN email, DROP COLUMN address;
```

当然我们也可以删除数据表中的所有列，但是这样会导致数据表被删除，所以我们需要使用 `DROP TABLE` 语句来删除表。

删除表的语法如下：

```sql
DROP TABLE table_name;
```

比如说，我们想要删除 `customers` 表，我们可以这样写：

```sql
DROP TABLE customers;
```

接下来请完成下面的挑战吧～

## 挑战

假设我们有一个 `customers` 表，它有 `id`、`name`、`email` 和 `birthday` 列。

请删除 `customers` 表中的 `email` 和 `birthday` 列。

PS (由于在线 SQL 编辑器的限制，你需要一列一列的删除，不能一次删除多列。)
