# 查询进阶 - 窗口函数

## 简介

窗口函数是一种在结果集的特定窗口范围上执行计算的特殊类型的函数。与常规聚合函数不同，窗口函数不会折叠多行为一行；它们会为输入的每一行提供一个值。

** 开窗函数可以与聚合函数（如 SUM、AVG、COUNT 等）结合使用 **，但与普通聚合函数不同，开窗函数不会导致结果集的行数减少。

### 1. 语法

所有窗口函数都需要使用 `OVER ()` 子句。它定义了计算窗口的范围。

```sql
SELECT <列名>,
<窗口函数> OVER ([PARTITION BY < 列名 >]
                  ORDER BY <列名> [ASC|DESC]
                  ROWS | RANGE <窗口范围>)
FROM <表名>
```

上面窗口函数的语法中，`PARTITION BY` 子句用于将结果集分成多个分区，每个分区都有自己的计算结果。`ORDER BY` 子句用于定义分区内的行顺序。`ROWS` 和 `RANGE` 子句用于定义窗口的范围。

### 2. 常见的窗口函数

#### ROW_NUMBER () 为结果集中的每一行分配一个唯一的序号。

比如，我们想要为每个部门的员工按照工资从高到低进行排序，同时保留原始的排序顺序。我们可以使用 `ROW_NUMBER ()` 窗口函数来实现。

| employee_id | first_name | last_name | salary | department_id |
| ----------- | ---------- | --------- | ------ | ------------- |
| 100         | Steven     | King      | 24000  | 100           |
| 101         | Neena      | Kochhar   | 15000  | 100           |
| 102         | Lex        | De Haan   | 17000  | 90            |

```sql
SELECT employee_id, first_name, last_name, salary, department_id,
       ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS row_num
FROM employees
```

可以得到如下的结果

| employee_id | first_name | last_name | salary | department_id | row_num |
| ----------- | ---------- | --------- | ------ | ------------- | ------- |
| 100         | Steven     | King      | 24000  | 100           | 1       |
| 101         | Neena      | Kochhar   | 15000  | 100           | 2       |
| 102         | Lex        | De Haan   | 17000  | 90            | 1       |

`PARTITION BY` 是可选的，如果没有指定，那么整个结果集将被视为一个分区。否则将会根据指定的列进行分区。

如上面的按照 `department_id` 进行分区，那么每个部门的员工都会被分到一个分区中。比如上面的结果集中，`employee_id` 为 100 和 101 的员工都属于 `department_id` 为 100 的分区。从而进行分区内的排序。

#### RANK () 为结果集中的每一行分配一个序号，但是如果有相同的值，那么它们将会有相同的序号。

比如，我们想要为每个部门的员工按照工资从高到低进行排序，如果有相同的工资，那么它们将会有相同的序号。我们可以使用 `RANK ()` 窗口函数来实现。

| employee_id | first_name | last_name | salary | department_id |
| ----------- | ---------- | --------- | ------ | ------------- |
| 100         | Steven     | King      | 24000  | 100           |
| 101         | Neena      | Kochhar   | 15000  | 100           |
| 103         | Alexander  | Hunold    | 17000  | 90            |
| 102         | Lex        | De Haan   | 17000  | 90            |

```sql
SELECT employee_id, first_name, last_name, salary, department_id,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
FROM employees
```

可以得到如下的结果

| employee_id | first_name | last_name | salary | department_id | rank |
| ----------- | ---------- | --------- | ------ | ------------- | ---- |
| 100         | Steven     | King      | 24000  | 100           | 1    |
| 101         | Neena      | Kochhar   | 15000  | 100           | 2    |
| 102         | Lex        | De Haan   | 17000  | 90            | 1    |
| 103         | Alexander  | Hunold    | 17000  | 90            | 1    |

可以看到，`employee_id` 为 102 和 103 的员工都属于 `department_id` 为 90 的分区，且工资相同，所以它们的 `rank` 都为 1。

`DENSE_RANK ()` 也是为行分配序号，但它不会跳过任何排名。

#### LAG () 和 LEAD () 用于访问当前行之前或之后的行。

比如，我们想要为每个部门的员工按照工资从高到低进行排序，同时保留原始的排序顺序。我们可以使用 `LAG ()` 窗口函数来实现。

| employee_id | first_name | last_name | salary | department_id |
| ----------- | ---------- | --------- | ------ | ------------- |
| 100         | Steven     | King      | 24000  | 100           |
| 101         | Neena      | Kochhar   | 15000  | 100           |
| 102         | Lex        | De Haan   | 17000  | 90            |

```sql
SELECT employee_id, first_name, last_name, salary, department_id,
       LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY salary DESC) AS lag_salary
FROM employees
```

可以得到如下的结果

| employee_id | first_name | last_name | salary | department_id | lag_salary |
| ----------- | ---------- | --------- | ------ | ------------- | ---------- |
| 100         | Steven     | King      | 24000  | 100           |            |
| 101         | Neena      | Kochhar   | 15000  | 100           | 24000      |
| 102         | Lex        | De Haan   | 17000  | 90            |            |

`LAG ()` 函数的第一个参数是要访问的列，第二个参数是要访问的行数。如果没有指定第二个参数，那么默认为 1，即访问上一行。

可以看到，在同一个分区内（`department_id` 为 100），`employee_id` 为 101 的员工的工资为 15000，而 `employee_id` 为 100 的员工的工资为 24000（在 `department_id` 为 100 前面），所以 `lag_salary` 为 24000。

`LEAD ()` 函数与 `LAG ()` 函数类似，但它访问的是当前行之后的行。

#### FIRST_VALUE () 和 LAST_VALUE () 用于访问窗口中的第一行和最后一行。

比如，我们想要为每个部门的员工按照工资从高到低进行排序，同时保留原始的排序顺序。我们可以使用 `FIRST_VALUE ()` 窗口函数来实现。

| employee_id | first_name | last_name | salary | department_id |
| ----------- | ---------- | --------- | ------ | ------------- |
| 100         | Steven     | King      | 24000  | 100           |
| 101         | Neena      | Kochhar   | 15000  | 100           |
| 101         | Neena      | Kochhar   | 18000  | 100           |
| 102         | Lex        | De Haan   | 17000  | 90            |

```sql
SELECT employee_id, first_name, last_name, salary, department_id,
       FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) AS first_salary
FROM employees
```

可以得到如下的结果

| employee_id | first_name | last_name | salary | department_id | first_salary |
| ----------- | ---------- | --------- | ------ | ------------- | ------------ |
| 100         | Steven     | King      | 24000  | 100           | 24000        |
| 101         | Neena      | Kochhar   | 15000  | 100           | 24000        |
| 101         | Neena      | Kochhar   | 18000  | 100           | 24000        |
| 102         | Lex        | De Haan   | 17000  | 90            | 17000        |

`FIRST_VALUE ()` 函数的第一个参数是要访问的列，第二个参数是要访问的行数。如果没有指定第二个参数，那么默认为 1，即访问第一行。

可以看到，在同一个分区内（`department_id` 为 100），`employee_id` 为 100 的员工的工资为 24000，而 `employee_id` 为 101 的员工的工资为 15000（在 `department_id` 为 100 前面），所以 `first_salary` 为 24000。

`LAST_VALUE ()` 函数与 `FIRST_VALUE ()` 函数类似，但它访问的是窗口中的最后一行。

### 3. 窗口范围

#### ROWS 和 RANGE

`ROWS` 和 `RANGE` 子句用于定义窗口的范围。

`ROWS` 子句用于定义窗口的行数范围。比如，`ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING` 表示窗口的范围为当前行的前一行和后一行。

`RANGE` 子句用于定义窗口的值范围。比如，`RANGE BETWEEN 100 PRECEDING AND 100 FOLLOWING` 表示窗口的范围为当前行的前 100 行和后 100 行。

### 4. 注意事项

- 不是所有的数据库系统都支持窗口函数。常见的如 PostgreSQL, SQL Server, 和 Oracle 都支持，但例如 MySQL 在 8.0 之前的版本不支持。
- 窗口函数通常不能与常规的聚合函数结合使用，除非在子查询中。

### 5. 更多

本文档只是简单介绍了窗口函数的基本用法，更多的窗口函数用法可以参考 [PostgreSQL 文档](https://www.postgresql.org/docs/9.1/functions-window.html)。

## 挑战

假设我们有一个 `employees` 表，包含了员工的信息，其中包含 `employee_id`, `first_name`, `last_name`, `salary`, `department_id` 等字段。

现在我们想要查询每个部门的员工，按照工资从高到低进行排序，同时保留原始的排序顺序。查询字段分别为 `employee_id`, `first_name`, `last_name`, `salary`, `department_id`, 以及访问当前行之前的行的工资 (`before_salary`)，访问窗口中的第一行 (`first_salary`) 和最后一行的工资 (`last_salary`)。
