# 关联查询 - FULL JOIN

## 简介

**MySQL 并不支持，所以无法直接运行，可以学习教程用法**

`FULL JOIN`，也被称为 `FULL OUTER JOIN`，在 SQL 中是一种特殊类型的外连接。它用于返回两个表中的所有记录，如果 **某个表中没有匹配的记录**，那么其他表的相应字段将显示为 NULL。就是说全连接会返回左表和右表中的所有记录行，如果左表中的某行在右表中没有关联行，则右表的字段值为空，反之亦然。

### 语法

```sql
SELECT columns
FROM table1
FULL JOIN table2
ON table1.column = table2.column;
```

### 示例

示例：假设我们有两个表：`students` 和 `registrations`。我们想要列出 **所有** 的学生和所有的注册记录，**即使某些学生没有注册，或某些注册没有对应的学生**。

```sql
SELECT students.student_name, registrations.course_name
FROM students
FULL JOIN registrations
ON students.student_id = registrations.student_id;
```

此查询会列出所有学生和所有课程的注册信息。对于没有注册任何课程的学生，`course_name` 会显示为 `NULL`。对于没有对应学生的注册记录，`student_name` 会显示为 `NULL`。

### 与其他连接类型的比较

INNER JOIN: 只返回两个表中都有的记录。
LEFT JOIN (LEFT OUTER JOIN): 返回左表的所有记录和右表中的匹配记录。
RIGHT JOIN (RIGHT OUTER JOIN): 返回右表的所有记录和左表中的匹配记录。
FULL JOIN (FULL OUTER JOIN): 返回两个表中的所有记录，不论是否有匹配的记录。

接下来请完成以下挑战吧～。

## 挑战

假设我们有一个学生表 `student` 包含 `id` `name` `age` `course` 4 个字段，一个成绩表 `score_info` 包含 `id` `name` `score` 3 个字段，请查询所有学生的信息以及他们的成绩，如果没有成绩则显示为 0。
字段包括：`id`(student.id) `name`(student.name) `age` `course` `score`

PS (数据表在右下侧可查看，使用的就是 FULL JOIN 进行展示的)
