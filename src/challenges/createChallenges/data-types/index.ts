import type { Challenge } from '@/type'
import content from './content.md?raw'
import initSql from './initSql.sql?raw'

const challenge: Challenge = {
  id: 'data-types',
  title: '创建表 - 数据类型',
  content: content,
  difficulty: 1,
  category: '创建表 - 数据类型',
  tags: ['create', 'insert'],
  answerSql: initSql,
  showTableSql: '',
  author: 'Talljack',
  initSql: '',
  defaultSql: `CREATE TABLE students (id INT NOT NULL PRIMARY KEY AUTOINCREMENT);`,

  sqlType: 'create'
}

export default challenge
