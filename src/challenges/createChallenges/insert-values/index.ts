import type { Challenge } from '@/type'
import content from './content.md?raw'
import initSql from './initSql.sql?raw'

const challenge: Challenge = {
  id: 'inert-values',
  title: '创建表 - INSERT VALUES',
  content: content,
  difficulty: 1,
  category: '创建表 - INSERT VALUES',
  tags: ['create', 'insert'],
  answerSql: `INSERT INTO students (first_name, last_name, age) VALUES('John', 'Doe', 25);
INSERT INTO students (first_name, last_name, age) VALUES ('Jane', 'Doe', null), ('Richard', null, 30);`,
  answer: '',
  showTableSql: 'SELECT * FROM students;',
  author: 'Talljack',
  initSql,
  defaultSql: `INSERT INTO students () VALUES();`,
  type: 'main',
  sqlType: 'create'
}

export default challenge
