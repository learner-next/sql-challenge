# 创建 - INSERT VALUES

## 简介

在上一节中，我们学习了如何创建表。在这一节中，我们将学习如何向表中插入数据。

在开始之前，确保你已经有一个数据库以及至少一个数据表，以便执行插入操作。

例如，我们有一个名为 students 的数据表，其结构如下：

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT
);
```

### 插入数据的语法

插入数据的语法如下：

```sql
INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...), (value1, value2, value3, ...), ...;
```

在上面的语法中，我们可以看到，我们需要**指定要插入的列名**，然后**指定要插入的值**。
如果我们想要插入多行数据，我们可以在 VALUES 关键字后面指定多个值。

### 插入单行数据

假设我们有一个名为 students 的数据表，其中包含如下字段：

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT
);
```

我们可以使用以下语句向 students 表中插入一行数据：

```sql
INSERT INTO students (id, first_name, last_name, age) VALUES (1, 'John', 'Doe', 25);
```

在上面的语句中，我们指定了要插入的列名，然后指定了要插入的值。

### 插入多行数据

假设我们有一个名为 students 的数据表，其中包含如下字段：

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT
);
```

我们可以使用以下语句向 students 表中插入多行数据：

```sql
INSERT INTO students (id, first_name, last_name, age)
    VALUES (1, 'John', 'Doe', 25), (2, 'Jane', 'Doe', 23), (3, 'Richard', 'Roe', 30);
```

上面的语句中，我们指定了要插入的列名，然后指定了要插入的值。

### 插入部分数据

假设我们有一个名为 students 的数据表，其中包含如下字段：

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT
);
```

我们可以使用以下语句向 students 表中插入部分数据：

```sql

INSERT INTO students (id, first_name, last_name)
    VALUES (1, 'John', 'Doe'), (2, 'Jane', 'Doe'), (3, 'Richard', 'Roe');
```

**很多时候我们会指定 id 字段为自增长，这样我们就不需要在插入数据时指定 id 字段了。**

### 使用子查询插入数据

我们可以使用子查询来插入数据。将子查询的结果作为插入的值。

假设我们有一个名为 students 的数据表，其中包含如下字段：

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT
);
```

我们可以使用以下语句向 graduate_students 表中插入数据：

```sql
INSERT INTO graduate_students (id, first_name, last_name, age)
    SELECT id, first_name, last_name, age FROM students WHERE id = 1;
```

在上面的语句中，我们使用子查询来插入数据。子查询的结果作为插入的值。

### 注意事项

- **数据类型匹配**：确保插入的数据与列的数据类型匹配。
- **唯一约束**：如果你的表有唯一约束或主键定义，确保插入的数据不会违反这些约束。
- **必填字段**：确保为所有没有默认值且不允许为 NULL 的字段提供值。
- **性能**：尽量批量插入数据，而不是插入单条记录，特别是当处理大量数据时。

接下来请完成下面的挑战吧～

## 挑战

假设我们已经有一张名为 students 的数据表，其结构如下：

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT
);
```

请你向 students 表中插入以下数据：
插入一条数据 `(first_name, last_name, age) ('John', 'Doe', 25)`

插入多条数据
`(first_name, last_name, age) ('Jane', 'Doe', null), ('Richard', null, 30)`
