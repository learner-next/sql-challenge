import type { Challenge } from '@/type'
import content from './content.md?raw'

const challenge: Challenge = {
  id: 'challenge1',
  title: '基础语法 - 创建 - 创建数据表',
  content: content,
  difficulty: 1,
  category: '创建表',
  tags: ['create'],
  answerSql: `CREATE TABLE IF NOT EXISTS student (
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    age INT  NOT NULL,
    gender CHAR(4) NOT NULL,
    birthday DATE NULL,
    address VARCHAR(256) NULL
  );
  INSERT INTO student (name, age, gender, birthday, address) VALUES('小明',20,'男','1998-12-20',null),('小丽',18,'女',null,'上海市浦东区');
  `,
  answer: 'SELECT * FROM student;',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql: '',
  defaultSql: 'CREATE TABLE IF NOT EXISTS student (id integer);',
  type: 'main',
  sqlType: 'create'
}

export default challenge
