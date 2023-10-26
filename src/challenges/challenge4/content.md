# 基础语法 - 查询 - 运算操作

## 简介

上一节我们学完了选择查询，我们知道了查询的时候可以选择出自己需要的字段，那么如果我想要对查询的数据进行操作，比如求和计算`age`之和或者计算出查询的总条数呢？

你估计想到了`excel`表中的相关函数比如`SUM`、`AVG`、`MAX`等，没错，`SQL`中也支持这些运算操作，那么我们该如何使用呢？

接下来我们要学习的正是运算操作查询 - 也就是对我们**查询出来后**的结果进行处理。

查询的 SQL 语法是 `SELECT SUM(fieldName), COUNT(fieldName2)  FROM tableName`，`fieldName`、`fieldName2`代表所需要查询的字段，`tableName` 代表表名，对查询的结果的对应`fieldName`**字段结果**进行求和以及对`fieldName2`**字段结果**进行求总量。

有一个用的比较少的的函数，但是使用起来非常有用的函数可以对不同的结果进行处理，同学们可以自己去查查这个函数，看看使用场景有哪些。

```sql
CASE expression
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
   ...
    WHEN conditionN THEN resultN
    ELSE result
END
```

## 示例

假设我们已经有了一张名为`student`表，表中包含学生的`name`，`age`，`gender`，`birthday`，`address`等字段。

`student`表如下：
| name | age | gender | birthday | address |
| ---- | --- | ------ | ---------- | ------------ |
| 小明 | 20 | 男 | 1998-12-20 | null |
| 小丽 | 18 | 女 | null | 上海市浦东区 |
| 小王 | 28 | 男 | 1997-08-11 | 北京市海淀区 |
| 小李 | 36 | 男 | 1989-02-18 | 北京市朝阳区 |

假设我们想要查询 `age` 的总和，以及 `name` 的总量。

```sql
SELECT SUM(age) AS 年龄总和, COUNT(name) AS 人数总量 FROM student;
```

于是我们可以得到一下的结果：

| 年龄总和 | 人数总量 |
| -------- | -------- |
| 102      | 4        |

接下来请完成以下的挑战吧～

## 挑战

请结合上面👆的`student`数据表的`运算操作的基本语句`去查询数据表的`age`的平均值别名为`平均年龄`、`name`进行求总数别名为`总人数`和`age`的最大值别名为`最大年龄`🌈～
PS（数据表已经创建好了，你可以在右下侧查看数据表中查看数据以及其他相关信息）
