# 创建表 - SQL Constraints

## 简介

上一节我们学完了如何创建数据表，但是我们创建的数据表是没有任何约束的，这样的话就会导致数据表中的数据不符合我们的预期，比如我们的`age`字段是一个年龄，但是我们可以插入一个`-1`的数据，这样的数据是不符合我们的预期的。

所以我们需要对数据表中的数据进行约束，这样才能保证数据的正确性。

## 约束

### 主键约束

主键是用来**唯一**标识一条记录的，一般是一个自增的整数，这里我们用 `id` 来作为主键。

主键的特点：

- 主键的值必须唯一
- 主键的值不能为空
- 主键的值不能修改
- 主键的值不能重复
- 主键的值不能为 null

主键的创建语句：

```sql
CREATE TABLE IF NOT EXIST table_name (column_name column_type PRIMARY KEY, column_name1 column_type1, ...);
```

#### 示例

假设我们有一张员工表，包含员工的`id`，`first_name`，`last_name`，`age` 等字段，则可以创建如下的表：

```sql
CREATE TABLE IF NOT EXIST employee (
    id int PRIMARY KEY,
    first_name varchar(256),
    last_name varchar(256),
    age int
);
```

### 非空约束

非空约束是用来**保证字段的值不能为空的**，比如我们的`name`字段，我们不希望它的值为空，这样的话我们就可以使用非空约束。

非空约束的创建语句：

```sql
CREATE TABLE IF NOT EXIST table_name (column_name column_type NOT NULL, column_name1 column_type1, ...);
```

#### 示例

假设我们有一张员工表，包含员工的`id`，`first_name`，`last_name`，`age` 等字段，则可以创建如下的表：

```sql
CREATE TABLE IF NOT EXIST employee (
    id int PRIMARY KEY,
    first_name varchar(256) NOT NULL,
    last_name varchar(256) NOT NULL,
    age int NOT NULL
);
```

### 唯一约束

唯一约束是用来**保证字段的值不能重复**，比如我们的`cardId`字段，我们不希望它的值重复，这样的话我们就可以使用唯一约束。

唯一约束的创建语句：

```sql
CREATE TABLE IF NOT EXIST table_name (column_name column_type UNIQUE, column_name1 column_type1, ...);
```

#### 示例

假设我们有一张员工表，包含员工的`id`，`first_name`，`last_name`，`card_id` 等字段，则可以创建如下的表：

```sql
CREATE TABLE IF NOT EXIST employee (
    id int PRIMARY KEY,
    first_name varchar(256) NOT NULL,
    last_name varchar(256) NOT NULL,
    cardId varchar(256) UNIQUE
);
```

### 默认约束

默认约束是用来**保证字段的值有一个默认值**，比如我们的`age`字段，我们希望它的值默认为`20`，这样的话我们就可以使用默认约束。

默认约束的创建语句：

```sql
CREATE TABLE IF NOT EXIST table_name (column_name column_type DEFAULT default_value, column_name1 column_type1, ...);
```

#### 示例

假设我们有一张员工表，包含员工的`id`，`first_name`，`last_name`，`age` 等字段，则可以创建如下的表：

```sql
CREATE TABLE IF NOT EXIST employee (
    id int PRIMARY KEY,
    first_name varchar(256) NOT NULL,
    last_name varchar(256) NOT NULL,
    age int DEFAULT 20
);
```

### 外键约束

外键约束是用来**保证字段的值必须在另一个表中存在**，比如我们的`student`表中有一个`classId`字段，我们希望它的值必须在`class`表中存在，这样的话我们就可以使用外键约束。

这样我们就可以通过外键将两个表关联起来，这样的话我们就可以通过`student`表中的`classId`字段来查询`class`表中的数据了。

外键约束的创建语句：

```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
```

#### 示例

假设我们有一张 User 表和一张 Orders 表，包含如下字段，并且通过 user 表中的 id 来关联 order 表中的 user_id 字段。

````sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

### 复合主键约束

复合主键约束是用来**保证多个字段的值组合起来唯一**，比如我们的`student`表中有一个`classId`字段，我们希望它的值必须在`class`表中存在，这样的话我们就可以使用外键约束。

复合键是由两个或多个字段组成的，用于唯一标识表中的记录。当没有单个字段足以成为唯一键时，通常使用复合键。

复合主键约束的创建语句：

```sql
CREATE TABLE IF NOT EXIST table_name (column_name column_type, column_name1 column_type1, ..., PRIMARY KEY (column_name, column_name1, ...));
````

#### 示例

假设我们有一张`student`表，包含学生的`id`，`name`，`age`，`gender`等字段，其中`id`和`name`组合起来是唯一的，那么我们可以创建如下的表：

```sql
CREATE TABLE IF NOT EXISTS student (
    id int,
    name varchar(256),
    age int,
    gender char(4),
    PRIMARY KEY (id, name)
)
```

接下来请完成以下的挑战吧～

## 挑战

假设我们需要一张`class`表，表中包含班级的`id`(唯一主键,自增)，`name`（非空约束）, `manager`（唯一非空约束）等字段。
并且还有一张`student`表，表中包含学生的`id`，`name`(非空约束)，`age`（默认值为20），`class_id`（外键、非空约束）等字段。复合主键为`id`和`class_id`。
