# 更新 - UPDATE VALUES

## 简介

上一节我们学习了如何修改数据表的结构，这一节我们将学习如何修改数据表中的数据。

更新数据表中的数据是很常见的操作，比如我们在创建数据表时，可能会忘记添加某些数据，或者某些数据需要修改，这时候就需要更新数据表中的数据。

比如我们在平时的开发中，可能会遇到这样的场景，用户可以点击一个按钮，来修改自己的昵称，这时候就需要更新数据表中的数据。

更新数据的操作语法如下：

```sql
UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
```

在上面的语法中，我们可以看到，我们需要指定要更新的列名，然后指定要更新的值。** 如果没有指定 WHERE 条件，那么所有的行都会被更新。同时 WHERE 条件尽可能准确查询到比如使用 id 查询 **

### 更新单行数据

假设我们有一个名为 `users` 的数据表，其中包含如下字段：

| id  | name  | age |
| --- | ----- | --- |
| 1   | Alice | 20  |
| 2   | Bob   | 18  |

我们可以使用以下语句更新 `users` 表中的一行数据：

```sql
UPDATE users SET name = 'John', age = 25 WHERE id = 1;
```

在上面的语句中，我们指定了要更新的列名，然后指定了要更新的值，最后指定了 `WHERE` 条件，这样就只会更新 `id 为 1` 的那一行。

### 更新多行数据

假设我们有一个名为 `users` 的数据表，其中包含如下字段：

| id  | name  | age |
| --- | ----- | --- |
| 1   | Alice | 20  |
| 2   | Bob   | 18  |
| 3   | Carol | 22  |

我们可以使用以下语句更新 `users` 表中的多行数据：

```sql
UPDATE users SET name = 'John', age = 25 WHERE id > 1;
```

在上面的语句中，我们指定了要更新的列名，然后指定了要更新的值，最后指定了 `WHERE` 条件，这样就只会更新 `id 大于 1` 的那些行。

### 更新多列数据

假设我们有一个名为 `users` 的数据表，其中包含如下字段：

| id  | name  | age |
| --- | ----- | --- |
| 1   | Alice | 20  |
| 2   | Bob   | 18  |
| 3   | Carol | 22  |

我们可以使用以下语句更新 `users` 表中的多列数据：

```sql
UPDATE users SET name = 'John', age = 25;
```

在上面的语句中，我们指定了要更新的列名，然后指定了要更新的值，这样就会更新所有的行。
** 但是别这样操作，这样会刷新所有的数据，这样做的后果是不可预料的。**

接下来请完成以下的挑战吧～

## 挑战

假设我们有一个名为 `user` 表，其中包含用户的 `id`，`name`，`age`，`gender`，`email` `password` 等字段。

`user` 表如下：

| id  | name | age | gender | email                 | password   |
| --- | ---- | --- | ------ | --------------------- | ---------- |
| 1   | 小明 | 20  | 男     | 144798098@qq.com      | 1234xyz    |
| 2   | 小丽 | 18  | 女     | beauty_girl@gmail.com | zsd6799    |
| 3   | 小王 | 28  | 男     | zshx@163.com          | wang123289 |
| 4   | 小李 | 36  | 男     | tsxkill@hotmail.com   | li3333     |

现在我们需要将 `user` 表中 `id 为 3` 的用户的 `email` 修改为 `wang_xiao@gmail.com` 以及 `password` 修改为 `wang_xiao7898`。
PS（数据表已经创建好了，你可以在右下侧查看数据表中查看数据以及其他相关信息）