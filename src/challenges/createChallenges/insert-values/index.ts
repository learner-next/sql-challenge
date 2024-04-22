import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'inert-values',
  title: '创建表 - INSERT VALUES',
  content,
  difficulty: 1,
  category: '创建表 - INSERT VALUES',
  tags: ['create', 'insert'],
  answerSql: `INSERT INTO students (first_name, last_name, age) VALUES('John', 'Doe', 25);
INSERT INTO students (first_name, last_name, age) VALUES ('Jane', 'Doe', null), ('Richard', null, 30);`,
  showTableSql: 'SELECT * FROM students;',
  author: 'Talljack',
  initSql,
  defaultSql: `INSERT INTO students () VALUES();`,

  sqlType: 'create'
}

export default challenge
