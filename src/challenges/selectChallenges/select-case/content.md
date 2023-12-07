# 高级查询 - CASE

## 简介

这一节我们单独来学习如何使用 `CASE`・语句来进行高级查询。`CASE` 也是一种高级函数，它可以让我们在查询的时候根据不同的条件进行判断，从而返回对应条件的结果。

比如它可以对我们查询的结果进行条件判断（当然 `IF` 也能做判断），这样我们就可以在查询的时候进行一些逻辑判断，而不是简单的返回结果。

### 1. `CASE WHEN` 的基本语法

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    ELSE resultN
END
```

- 当 condition1 成立，返回 result1。
- 如果 condition1 不成立但 condition2 成立，返回 result2。
- 如果没有任何条件成立，返回 resultN。

示例： 根据员工的薪水等级分类。

```sql
Copy code
SELECT employee_name, salary,
CASE
    WHEN salary < 5000 THEN 'Low'
    WHEN salary BETWEEN 5000 AND 10000 THEN 'Medium'
    ELSE 'High'
END AS salary_grade
FROM employees;
```

### 2. 在 `ORDER BY` 中使用 `CASE WHEN`

你可以在 `ORDER BY` 子句中使用 `CASE WHEN` 来根据条件动态排序。

示例： 首先按照是否是经理排序，然后按薪水降序排序。

```sql
SELECT employee_name, position, salary
FROM employees
ORDER BY
CASE
    WHEN position = 'Manager' THEN 1
    ELSE 2
END,
salary DESC;
```

`order by 1` 的意思是按照选择的第一字段排序，`order by 2` 的意思是按照选择的第二个字段排序，以此类推。但是并不建议这么做，因为这样会降低代码的可读性以及可能出现意外的情况。[具体查看这里](https://stackoverflow.com/questions/3445118/what-is-the-purpose-of-order-by-1-in-sql-select-statement)

### 3. `CASE WHEN` 的嵌套使用

`CASE WHEN` 也可以嵌套使用，这样我们就可以根据多个条件进行判断。

示例： 根据员工的薪水等级和职位分类。

```sql
SELECT employee_name, position, salary,
CASE
    WHEN salary < 5000 THEN 'Low'
    WHEN salary BETWEEN 5000 AND 10000 THEN
        CASE
            WHEN position = 'Manager' THEN 'Medium'
            ELSE 'Low'
        END
    ELSE 'High'
END AS salary_grade
FROM employees;
```

### 4. `CASE WHEN` 的注意事项

- `CASE WHEN` 语句是有顺序的，当第一个条件成立时，后面的条件不会再执行。
- `CASE WHEN` 语句是可以嵌套使用的，但是不要嵌套太多层，否则会影响查询效率。
- `CASE WHEN` 语句可以在 `SELECT`、`WHERE`、`ORDER BY` 等子句中使用。
- `CASE WHEN` 语句可以使用 `ELSE` 子句，也可以不使用。如果省略了 `ELSE` 子句，当没有条件匹配时，`CASE` 表达式将返回 `NULL`。
- `CASE WHEN` 语句可以使用 `END` 结束，也可以不使用。但是最好还是使用 `END` 来结束，这样可以提高代码的可读性。
- `CASE WHEN` 语句可以使用 `AS` 子句来为结果起别名，也可以不使用。
- `CASE WHEN` 语句可以使用 `BETWEEN`、`IN`、`LIKE` 等条件表达式。

接下来请完成以下的挑战吧～

## 挑战

请结合上面👆的案例中的 `Case 查询` 去根据 `address` 进行分类，如果包含北京市则返回北京市，包含上海市则返回上海市，否则返回其他，同时根据不同的 `age` 进行排序，如果 `age < 20` 则按照 `age` 降序否则按照 `name` 降序，分别查询 `name`、`age`、`gender`、`address`（`case` 结果别名为 `address`）🌈～
PS（数据表已经创建好了，你可以在右下侧查看数据表中查看数据以及其他相关信息）
