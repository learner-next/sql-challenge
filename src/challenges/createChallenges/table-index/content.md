# 创建表 - Index

## 简介

索引是数据库中对某一列或多个列的值进行排序的一种数据结构，使用索引可快速访问数据库表中的特定信息。类似于书籍的目录，索引可以让数据库快速定位到表中的特定信息。

这里只是简单介绍和使用索引，更多的内容可以参考[官方文档](https://dev.mysql.com/doc/refman/8.0/en/mysql-indexes.html)。

### 为什么要使用索引？

性能提升: 索引允许数据库引擎迅速查找到表中的行，这大大减少了查询所需的时间。
排序和分组: 有了索引，排序和分组操作也会更快。

索引过多会导致性能下降，因为索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录，所以索引越多，可能会减慢 INSERT，UPDATE 和 DELETE 查询的速度，因为在执行这些操作时索引也需要更新。

### 创建索引

#### 创建数据表时创建索引

创建数据表时，可以在 CREATE TABLE 语句中使用 INDEX 关键字来创建索引，语法如下：

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ...
    INDEX index_name (column1, column2, ...),
);
```

#### 创建索引

也可以使用 CREATE INDEX 语句来创建索引，语法如下：

```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

### 索引的类型

MySQL支持多种类型的索引，这里只介绍最常用的几种。

#### PRIMARY KEY（主键索引）

**主键索引是一种特殊的唯一索引，不允许有空值。一张表只能有一个主键索引。**

主键索引的值唯一标识表中的每一行，主键索引自动创建，除非你显式地指定了另一个主键。主键索引的值不能修改或更新，这是为了保持索引的一致性。

示例：给 persons 表的 id 列创建主键索引。

```sql
CREATE TABLE persons (
    id INT NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    age INT,
    PRIMARY KEY (id)
);
```

或者使用创建索引的语法：

```sql
CREATE PRIMARY KEY (id) FROM persons;
```

#### UNIQUE（唯一索引）

**唯一索引与主键索引类似，但允许有空值。一张表可以有多个唯一索引。**

示例：给 persons 表的 card_id 列创建唯一索引。

使用 CREATE TABLE 语句：

```sql
CREATE TABLE persons (
    id INT NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    age INT,
    card_id INT,
    UNIQUE card_id_index (card_id)
);
```

或者使用创建索引的语法：

```sql
CREATE UNIQUE INDEX card_id_index ON persons (card_id);
```

#### INDEX（普通索引）

**普通索引也叫单列索引，最常见的索引类型，它没有唯一性的限制，一个表可以有多个普通索引。**

示例：给 persons 表的 last_name 列创建普通索引。

使用 CREATE TABLE 语句：

```sql
CREATE TABLE persons (
    id INTEGER NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    age INT,
    INDEX last_name_index (last_name)
);
```

或者使用创建索引的语法：

```sql
CREATE INDEX last_name_index ON persons (last_name);
```

#### FULLTEXT（全文索引）

**全文索引只能在 CHAR、VARCHAR 或 TEXT 类型的列上创建，它可以在文本列上查找关键词。**

FULLTEXT 的使用比较复杂，这里只是简单介绍，更多的内容可以参考[官方文档](https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html)。

示例：给 persons 表的 first_name 列创建全文索引。

使用 CREATE TABLE 语句：

```sql
CREATE TABLE persons (
    id INT NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    age INT,
    FULLTEXT first_name_full_text_index  (first_name)
);
```

或者使用创建索引的语法：

```sql
CREATE FULLTEXT INDEX index_name ON persons (first_name);
```

#### 组合索引（包含多列的索引，与上面的单列索引相对）

**组合索引也叫复合索引，它是多个列上创建的索引，只有在查询条件中使用了创建索引时的第一个字段，索引才会被使用。**

比如你有一个INDEX(A, B, C)，那么
以下查询可能会使用这个索引：

```sql
WHERE A = ?
WHERE A = ? AND B = ?
WHERE A = ? AND B = ? AND C = ?
```

但注意，以下查询可能不会使用整个复合索引：

```sql
WHERE B = ?（这将不会使用 (A, B, C) 这个索引，因为它跳过了 A）
WHERE A = ? AND C = ?（这可能只使用到索引的 A 部分）
```

示例：给 persons 表的 last_name 和 first_name 列创建组合索引。

使用 CREATE TABLE 语句：

```sql
CREATE TABLE persons (
    id INT NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    age INT,
    INDEX (last_name, first_name)
);
```

或者使用创建索引的语法：

```sql
CREATE INDEX index_name ON persons (last_name, first_name);
```

#### 删除索引

使用 DROP INDEX 语句来删除索引，语法如下：

```sql
DROP INDEX index_name ON table_name;
```

或者使用 ALTER TABLE 语句来删除索引，语法如下：

```sql
ALTER TABLE table_name DROP INDEX index_name;
```

同时 ALTER TABLE 语句也可以用来添加索引，语法如下：

```sql
ALTER TABLE table_name ADD INDEX index_name (column1, column2, ...);
```

#### 更新索引

在 `MySQL` 中，直接修改现有索引是不可能的，但可以通过删除旧索引再创建新索引的方式来实现索引的修改。

```sql
ALTER TABLE table_name DROP INDEX index_name;
ALTER TABLE table_name ADD INDEX index_name (column1);
```

### 索引使用技巧

- 索引选择性：具有高唯一性的列是最佳的索引候选，因为它们提供了更好的选择性。
- 考虑查询模式：创建索引时，考虑应用程序中的常见查询。确保这些查询受益于你的索引。

### 索引的注意事项

- 不要过度索引：每个索引都会增加插入、更新和删除的开销。因此，不要为表的每一列都创建索引。
- 谨慎使用复合索引：当查询只使用到复合索引的一部分时，可能不会触发索引的使用。确保复合索引的列顺序与查询匹配。
- 对于经常需要排序的列，可以创建索引，这样可以避免每次排序时都进行扫描。

接下来请完成以下挑战吧。（**请使用创建表的语法创建索引**）

## 挑战

假设我们有一个表，表名为 `users`（**请使用创建表的语法创建索引**），包含以下字段：
`user_id` 主键索引 INT，非空约束，
`name` INDEX 索引 VARCHAR(256) 非空约束，(通过 CREATE INDEX 语句添加索引)
`card_id` UNIQUE 索引 INT 非空约束， (通过 CREATE INDEX 语句添加索引)

注意：（很多在线运行并不支持通过创建表/修改的语法创建索引，所以这里使用了创建索引的语法）

以上仅为练习，实际开发中请根据实际情况创建索引。

需要了解更多的同学，请自行去官方文档查看学习。
