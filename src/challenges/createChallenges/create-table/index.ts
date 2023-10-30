import type { Challenge } from '@/type'
import content from './content.md?raw'

const challenge: Challenge = {
  id: 'create-table',
  title: '创建 - 创建数据表',
  content: content,
  difficulty: 1,
  category: '创建表',
  tags: ['create'],
  answerSql: `CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(256) NOT NULL,
    age INT  NOT NULL DEFAULT 20,
    gender CHAR(4) NOT NULL,
    birthday DATE NULL,
    address VARCHAR(256) NULL
  );`,
  answer: 'SELECT * FROM student;',
  showTableSql: '',
  author: 'Talljack',
  initSql: '',
  defaultSql: 'CREATE TABLE IF NOT EXISTS student (id INTEGER);',
  type: 'main',
  sqlType: 'create'
}

export default challenge
