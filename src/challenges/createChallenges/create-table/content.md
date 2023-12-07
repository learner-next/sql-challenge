# 创建表 - 创建数据表

## 简介

学习数据库的第一步，就行要学习如何创建数据表。

当然我们得要先有了解一些基本概念，比如数据库，数据表，字段，数据类型等等。

数据库可以类比为一个文件夹，数据表可以类比为文件夹中的文件，字段可以类比为文件中的内容，数据类型就是字段的类型，比如字符串，数字，日期等等。

SQL 指结构化查询语言，全称是 Structured Query Language，它可以用来访问和处理数据库，包括数据插入、查询、更新和删除，被广泛应用于各种类型的数据库，如 MySQL、PostgreSQL、Microsoft SQL Server 等。

这篇教程会帮助你从 0 开始练习 SQL，而不只是去看文档，很多时候我们看完文档没有去操作反而会忘记，所以这篇教程会帮助你更好的学习 SQL。

SQL 需要学习的非常多，重点也是在查询，而我们这篇将会先试着让你去创建数据表。

## 示例

假设我们需要建立一张 `student`，表中包含学生的 `id`，`name`，`age`，`gender`，`birthday`，`address` 等字段。

| 字段     | 类型          | 是否主键 | 默认值 | 是否为 null      |
| -------- | ------------- | -------- | ------ | ---------------- |
| id       | integer       | Yes      | 无     | 不为 null (自增) |
| name     | varchar (256) | No       | 无     | 不为 null        |
| age      | int           | No       | 20     | 不为 null        |
| gender   | char (4)      | No       | 无     | 不为 null        |
| birthday | date          | No       | 无     | 可为 null        |
| address  | varchar (256) | No       | 无     | 可为 null        |

每个表中都会有一个主键，** 主键是用来唯一标识一条记录的，一般是一个自增的整数 **，这里我们用 `id` 来作为主键。

创建数据表的基本语句

```sql
CREATE TABLE IF NOT EXIST table_name (column_name column_type, column_name1 column_type1, ...);
```

接下来请完成以下的挑战吧～

## 挑战

请结合上面的创建数据表的基本语句去创建上面👆的 `student` 表吧～
