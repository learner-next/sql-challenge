# 关联查询 - CROSS JOIN

## 简介

在之前的教程中我们大多数时候都是在单张表上进行数据查询，但是很多时候我们需要在获取单张表的数据的同时获取其他表的数据，这时就需要使用关联查询了。

`CROSS JOIN` 返回**两个表的笛卡尔积**。它不需要任何连接条件。如果**表 A 有 n 行，表 B 有 m 行，那么它们的 `CROSS JOIN` 将有 n \* m 行**。

### Cross Join 的基本语法

```sql
SELECT column_name(s)
FROM table1
CROSS JOIN table2;
```

注意到 `CROSS JOIN` 不需要任何连接条件，它会返回两个表的笛卡尔积。

### Cross Join 的使用场景

1. 组合不同属性：如上面的示例所示，当你想要组合不同的属性时，CROSS JOIN 是很有用的。

2. 生成数据：如果你需要生成大量数据，例如进行性能测试时，CROSS JOIN 可以帮助你轻松地生成数据。

### 注意事项

1. 请确保在使用 `CROSS JOIN` 时**为表使用别名**，这样你可以清晰地区分哪个是哪个。
2. `CROSS JOIN` 可能会返回大量数据，特别是当你连接的表都很大时。因此，你应该小心地使用它，避免意外地生成过多的数据。
3. `CROSS JOIN` 不需要连接条件，但你仍然可以在查询中使用 `WHERE` 子句来过滤结果。

## 示例

假设我们有两个表，一个是 `colors` 表，一个是 `sizes` 表。

`colors` 表：

| id  | color |
| --- | ----- |
| 1   | red   |
| 2   | blue  |
| 3   | green |

`sizes` 表：

| id  | size |
| --- | ---- |
| 1   | S    |
| 2   | M    |
| 3   | L    |

这里我们希望查找出所有的颜色和尺寸的组合。

```sql
SELECT c.color, s.size
FROM colors c CROSS JOIN sizes s;
```

可以得到如下结果：

| color | size |
| ----- | ---- |
| red   | S    |
| red   | M    |
| red   | L    |
| blue  | S    |
| blue  | M    |
| blue  | L    |
| green | S    |
| green | M    |
| green | L    |

可以看到我们会先把 `colors` 表中的每一行数据会和 `sizes` 表中的每一行数据进行叉乘，然后返回所有结果（如果有 WHERE 会根据 WHERE 过滤）。

接下来请完成下面的挑战吧～。

## 挑战

假设我们有一个 `employees` 表，其中包括 `id` `name` `salary` 4 个字段。
也有一个 `departments` 表，其中包括 `id` `name` 2 个字段。
现在需要你帮我返回 员工的 `name -> employee_name` `salary` 以及部门的 `name -> department_name`。同时需要过滤掉 `salary` 小于 `3000` 的数据。

PS（数据表已经建好，你可以在右下角进行查看,使用 `CROSS JOIN` 查询并展示）
