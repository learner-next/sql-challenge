import type { Challenge } from '@/type'
import content from './content.md?raw'

const challenge1: Challenge = {
  id: 'challenge1',
  title: '基础语法 - 创建 - 创建数据表',
  content: content,
  difficulty: 1,
  category: '创建表',
  tags: ['create'],
  answerSql: `CREATE TABLE student (
    id integer not null primary key,
    name varchar(256) not null,
    age int not null default 20,
    gender char(4) not null,
    birthday date null,
    address varchar(256) null
  );
  INSERT INTO student (name, age, gender, birthday, address) values('小明',20,'男','1998-12-20',null),('小丽',18,'女',null,'上海市浦东区');
  `,
  answer: 'SELECT * FROM student;',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql: '',
  defaultSql: 'CREATE TABLE student (id integer);',
  type: 'main',
  sqlType: 'create'
}

export default challenge1
