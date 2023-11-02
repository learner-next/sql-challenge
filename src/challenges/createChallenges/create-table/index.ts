import type { Challenge } from '@/type'
import content from './content.md?raw'
import initSql from './initSql.sql?raw'

const challenge: Challenge = {
  id: 'create-table',
  title: '创建表 - 创建数据表',
  content: content,
  difficulty: 1,
  category: '创建表',
  tags: ['create'],
  answerSql: initSql,
  showTableSql: '',
  author: 'Talljack',
  initSql: '',
  defaultSql: 'CREATE TABLE IF NOT EXISTS student (id INTEGER);',
  type: 'main',
  sqlType: 'create'
}

export default challenge
