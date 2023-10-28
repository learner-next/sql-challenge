# 高级查询 - 关联查询 - 自连接

## 简介

`自连接` 是一种特殊类型的连接，它允许**一个表与其自身进行连接**。这种连接经常在数据中存在层次结构或相关记录时使用。

### 为什么要使用 `自连接`

假设你有一个包含员工信息的表，其中每个员工都有一个经理，而经理本身也是员工。 
这种层次结构在同一个表中，因此要列出每个员工及其经理的信息，你需要使用 `自连接`。

自连接可用的关键字是 `INNER JOIN` 和 `LEFT JOIN`等，具体取决于你的需求。。

自连接可以理解为 **自己连接自己**，这样就可以将一张表看成两张表来使用，这样就可以方便的查询出我们想要的结果。

### `自连接` 的基本语法

```sql
SELECT column_name(s)
FROM table1 T1
JOIN table2 T2
WHERE condition;
```

### 注意事项

确保在使用 `自连接` 时为表使用别名，这样你可以清晰地区分哪个是哪个。

## 示例

假设我们有一个`employees`表，其中包含员工的信息，每个员工都有一个经理，而经理本身也是员工。

| id  | name | manager_id | employee_id | salary |
| --- | ---- | ---------- | ----------- | ------ |
| 1   | John | 3          | 1           | 3000   |
| 2   | Bob  | 3          | 2           | 2000   |
| 3   | Mary | 4          | 3           | 4000   |
| 4   | Joe  | NULL       | 4           | 5000   |
| 5   | Tom  | 4          | 5           | 2500   |

这里我们希望查找出每个员工的 `name` 以及对应的经理的 `name` 以及 `salary`。

```sql
SELECT e.name AS employee_name, m.name AS manager_name, e.salary AS salary
FROM employees e JOIN employees m
ON e.manager_id = m.employee_id;
```

可以得到如下结果：

| employee_name | manager_name | salary |
| ------------- | ------------ | ------ |
| John          | Mary         | 3000   |
| Bob           | Mary         | 2000   |
| Mary          | Joe          | 4000   |
| Tom           | Joe          | 2500   |

可以看到我们会先把员工表中的每一行数据会和自身的每一行数据进行比较，然后根据 `ON` 后面的条件进行筛选，最后得到我们想要的结果。

接下来请完成下面的挑战吧～。

## 挑战

假设我们有一个 `family_members` 表，其中包括member_id (主键)member_name 
father_id (与 member_id 相关联的外键) mother_id (与 member_id 相关联的外键) 
我们希望列出每个家庭成员的名字，以及其父亲和母亲的名字（对应查询字段 Child_Name, Father_Name, Mother_name）。
PS（数据表已经建好，你可以在右下侧直接查看）
