# 条件查询 - And 和 Or

## 简介

上一节我们学完了`LIKE查询`，通过`LIKE`关键字可以进行模糊查询，查询出包含某个关键字的数据，那么这一节我们来学习一下`逻辑查询`，通过`AND`和`OR`关键字来进行逻辑查询。

逻辑查询通常是有多个逻辑条件组合而成的，也就是说我们需要运用多个查询条件来进行逻辑联结，然后将符合条件的数据查询出来。

举一个🌰，比如我们想要查询出`age`大于等于`18`并且`age`小于等于`30`的数据，那么我们可以使用`AND`关键字来进行查询，如下：

```sql
SELECT * FROM student WHERE age >= 18 AND age <= 30;
```

逻辑查询相关的语法是：

```sql
-- AND | OR
SELECT name, age from student WHERE 查询条件 [AND|OR] 查询条件;

-- NOT
SELECT name, age from student WHERE NOT 查询条件;
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
| 小宁 | 16 | 男 | 2002-06-12 | null |
| 小张 | 32 | 男 | null | 广东省深圳市 |

接下来我们想要查询出 `age` 小于等于 `20` 并且 `gender` 为`男`的数据，那么我们可以使用`AND`关键字来进行查询，如下：

```sql
SELECT * FROM student WHERE age <= 20 AND gender = "男";
```

可以得到如下的结果：
| name | age | gender | birthday | address |
| ---- | --- | ------ | ---------- | ------------ |
| 小明 | 20 | 男 | 1998-12-20 | null |
| 小宁 | 16 | 男 | 2002-06-12 | null |

接下来请完成以下的挑战吧～

## 挑战

请结合上面👆的案例中的`逻辑查询`去查询数据表中`age`小于等于 `20` 并且 `address` 中包含 `北京市` 的数据，然后需要查询`name`、`age`、`gender`和`address`字段吧🌈～
PS（数据表已经创建好了，你可以在右下侧查看数据表中查看数据以及其他相关信息）
