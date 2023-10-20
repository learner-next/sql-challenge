import type { Challenge } from '@/type'
import content from './content.md?raw'

const challenge1: Challenge = {
  id: 'challenge1',
  title: '基础语法 - 创建 - 创建数据表',
  content: content,
  difficulty: 1,
  category: '创建表',
  tags: ['create'],
  answer: `CREATE TABLE student (
    id integer not null primary key,
    name varchar(256) not null,
    age int not null default 20,
    gender char(4) not null,
    birthday date null,
    address varchar(256) null
  );`,
  author: 'Talljack',
  initSql: '',
  defaultSql: 'CREATE TABLE student (id integer);',
  type: 'main'
}

export default challenge1
