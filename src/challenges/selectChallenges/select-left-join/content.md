# 关联查询 - LEFT JOIN

## 简介

在上一节中，我们学习了如何使用 `INNER JOIN` 来关联两个表。在这一节中，我们将学习如何使用 `LEFT JOIN` 和 `RIGHT JOIN` 来关联两个表。

它们这两种连接类型都是外连接（`OUTER JOIN`），其主要目的是**返回一个表中的记录，即使另一个表中没有匹配的记录**。(包含没有匹配的行)

`LEFT JOIN` 和 `RIGHT JOIN` 的区别在于，`LEFT JOIN` 会返回**左表**中的所有记录，而 `RIGHT JOIN` 会返回**右表**中的所有记录。

### 语法

```sql
SELECT column_name(s) FROM table1 [LEFT|RIGHT] JOIN table2 ON table1.column_name = table2.column_name;
```

一般来说 `LEFT JOIN` 和 `RIGHT JOIN` 的语法是一样的，只是关键字不同，而且通过把表的位置调换可以达到同样的效果。

但值得注意的是，并非所有数据库系统都支持 RIGHT JOIN，**但所有系统都支持 LEFT JOIN。因此，为了跨数据库的兼容性，一些开发者更倾向于使用 LEFT JOIN**。

## 示例

假设有一个 `employee` 表，表中包含员工的 `id` `name` `department` `salary`，还有一个 `department` 表，表中包含部门的 `id` `name` `manager`。

employee 表：

| id  | name | department | salary |
| --- | ---- | ---------- | ------ |
| 1   | Tom  | HR         | 1000   |
| 2   | Jack | IT         | 1500   |
| 3   | Mike | Sale       | 1200   |
| 4   | Mary | Chat       | 2000   |
| 5   | Tony | IT         | 1800   |

department 表：

| id  | name | manager |
| --- | ---- | ------- |
| 1   | HR   | Tom     |
| 2   | IT   | Jack    |
| 3   | Sale | Mike    |

查询 employee 表中的所有员工及其所在部门的信息：

```sql
SELECT e.id, e.name, e.department, salary, d.manager FROM employee e LEFT JOIN department d ON e.department = d.name;
```

查询结果：

| id  | name | department | salary | manager |
| --- | ---- | ---------- | ------ | ------- |
| 1   | Tom  | HR         | 1000   | Tom     |
| 2   | Jack | IT         | 1500   | Jack    |
| 3   | Mike | Sale       | 1200   | Mike    |
| 4   | Mary | Chat       | 2000   | NULL    |
| 5   | Tony | IT         | 1800   | Jack    |

如上图所示，`LEFT JOIN` 会返回左表中的所有记录，即使右表中没有匹配的记录，也会返回。如果右表中没有匹配的记录，那么右表中的字段值就会被设置为 `NULL`。

接下来请完成以下挑战吧～。

## 挑战

假设我们有一个`student`表，表中包含学生的`id` `name` `age` `class` `score`，还有一个`class`表表中包含班级的`id` `name` `teacher`。
现在请你帮我查询出所有学生的信息，以及他们所在班级的信息。

你需要返回字段 `student.id -> s_id` `student.name -> s_name` `student.age -> s_age` `student.class -> s_class`
`student.score -> s_score` `class.teacher -> c_teacher`(->表示用对应别名表示)。
PS（表已经建好，可以在右下侧查看，其中两张表已经展示成一张表）
