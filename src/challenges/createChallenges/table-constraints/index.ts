import type { Challenge } from '@/type'
import content from './content.md?raw'
import initSql from './initSql.sql?raw'

const challenge: Challenge = {
  id: 'table-constraints',
  title: '创建 - SQL Constraints',
  content: content,
  difficulty: 2,
  category: '创建表',
  tags: ['create', 'constraints'],
  answerSql: initSql,
  answer: '',
  showTableSql: '',
  author: 'Talljack',
  initSql: '',
  defaultSql: 'CREATE TABLE IF NOT EXISTS student (id INTEGER);',
  type: 'main',
  sqlType: 'create'
}

export default challenge
