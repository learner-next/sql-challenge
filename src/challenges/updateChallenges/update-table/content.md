# 更新 - 更新表

## 简介

在创建表之后，我们可以进行数据表的更新操作。更新操作可以分为两种，一种是更新表的结构，另一种是更新表的数据。

随着我们的开发，我们可能会发现之前创建的表结构不够用了，需要对表结构进行更新。
比如，我们之前创建的 `user` 表，只有 `name` 和 `age` 两个字段，现在我们需要增加一个 `email` 字段，那么我们就需要对 `user` 表进行更新。

### 更新表结构

更新表结构，我们可以使用 `alter table` 语句，语法如下：

```sql
alter table <表名> add [column] <字段名> <字段类型>;
```

#### 增加字段

比如，我们要给 `user` 表增加一个 `email` 字段，那么我们可以这样写：

```sql
alter table user add email varchar(255);
```

#### 重命名字段

如果我们要将 `email` 字段重命名为 `mail` 字段，那么我们可以这样写：

```sql
alter table user rename email to mail varchar(255);
```

#### 修改字段

如果我们要修改 email 字段的类型从 varchar 到 text 类型，那么我们可以这样写：

```sql
alter table user modify email text;
```

#### 删除字段

如果我们要删除 email 字段，那么我们可以这样写：

```sql
alter table user drop email;
```

## 示例

假设我们已经有了一张名为`student`表，表中包含学生的`name`，`age`，`gender`等字段。

`student`表如下：
| name | age | gender |
| ---- | --- | ------ |
| 小明 | 20 | 男 |
| 小丽 | 18 | 女 |
| 小王 | 28 | 男 |
| 小李 | 36 | 男 |

现在我们需要给 `student` 表增加一个 `address` 和 `birthday` 字段，那么我们可以这样写：

```sql
alter table student add address varchar(255), add birthday date;
```

新的表结构如下：

| name | age | gender | birthday | address |
| ---- | --- | ------ | -------- | ------- |

接下来请完成以下的挑战吧～

## 挑战

假设我们有一张名为`user`表，表中包含用户的`id`，`name`，`age`，`gender`，`email`等字段。
现在请你增加一个`address`字段，类型为`varchar(255)`，并且将`email`字段的类型修改为`text`类型吧🌈～
备注：**该在线运行只支持单列添加或修改, 同时也要加上 COLUMN关键字**
PS（数据表已经创建好了，你可以在右下侧查看数据表中查看数据以及其他相关信息）
