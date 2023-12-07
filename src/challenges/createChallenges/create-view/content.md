# 创建 - 视图

## 简介

视图是一个 ** 虚拟的表，它是从一个或多个表中导出的表 **。视图包含行和列，就像一个真实的表一样。视图中的行和列都是从其他表中导出的，也就是说，视图中的行和列都是来自于其他表的字段。

为什么要使用视图？

1. 保护数据，使用视图可以隐藏表中的敏感数据，只显示需要的数据
2. 简化复杂的操作， 把 ** 经常使用 ** 的数据定义为视图，可以将复杂的 SQL 查询语句进行封装。
3. 更改数据格式和表示，使用视图可以更改数据的格式和表示，使其更容易理解

![Alt text](/public/view.png)

### 创建视图

创建视图就像创建表一样，使用 `CREATE VIEW` 语句，语法如下：

```sql
CREATE [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] VIEW view_name
AS select_statement
```

- `view_name`：视图的名称
- `select_statement`：视图的查询语句 (支持单表和多表查询)
  `ALGORITHM`：指定创建视图的算法，有三种算法

- `UNDEFINED`：MySQL 将选择最有效的算法
- `MERGE`：将视图合并到查询中
- `TEMPTABLE`：将视图作为临时表创建

### 查看视图

使用 `SHOW CREATE VIEW` 语句查看视图的创建语句，语法如下：

```sql
SHOW CREATE VIEW view_name;
```

### 查询视图数据

使用 `SELECT` 语句查询视图的数据，就跟 ** 查询数据表一样 **，语法如下：

```sql
SELECT * FROM view_name;
```

### 修改视图

使用 `ALTER VIEW` 语句修改视图，语法如下：

```sql
ALTER VIEW view_name AS select_statement;
```

### 更新视图

使用 `UPDATE` 语句更新视图，语法如下：

```sql
UPDATE view_name SET column_name = value WHERE condition;
```

更新视图的语法与更新表的语法相同，只是视图是虚拟的表，所以更新视图的数据，实际上是更新视图所引用的表的数据。

更新视图注意事项：

- 视图必须包含唯一的 `key`，否则无法更新
- 视图必须只引用一个表，否则无法更新
- 视图不能包含以下关键字：`GROUP BY`、`HAVING`、`UNION`、`DISTINCT`、`TOP`、`FROM`、`ORDER BY`、`LIMIT`、`PROCEDURE`、`INTO`
- 视图不能使用子查询
- 视图不能使用临时表
- 计算字段不能更新

### 删除视图

使用 `DROP VIEW` 语句删除视图，语法如下：

```sql
DROP VIEW [IF EXISTS] view_name;
```

## 示例

假设我们有一个 `users` 表和一个 `customers` 表，表结构如下：

```sql
CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  age INT NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  price INT NOT NULL,
  count INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);
```

接下来我们创建一个联合查询的视图，查询 `users` 表和 `customers` 表的数据，语法如下：

```sql
CREATE VIEW user_customer AS
SELECT
  u.id,
  u.name,
  u.age,
  u.email,
  c.price,
  c.count
FROM
  users u
  INNER JOIN customers c ON u.id = c.user_id;
```

以上的创建就会在视图表中存在以下列：

- id
- name
- age
- email
- price
- count

接下来请完成下面的挑战吧～

## 挑战

假设我们有一个 employees 表 和一个 departments 表，表结构如下：

```sql
CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  department_id INT NOT NULL,
  age INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  address VARCHAR(50) NOT NULL
);
```

请你创建一个视图，查询 `employees` 表和 `departments` 表的数据，需要 `JOIN` 两张表然后将

- `employees.id -> id`
- `employees.name -> name`
- `employees.age -> age`
- `employees.email -> email`
- `employees.salary -> salary`
- `departments.name -> department_name`
- `departments.address -> address`
  作为视图的列，视图的名称为 `employee_department`。
  PS (-> 表示视图列的别名)
