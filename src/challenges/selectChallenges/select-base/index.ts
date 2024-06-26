import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-base',
  title: '查询 - 基础查询',
  content,
  difficulty: 1,
  category: '查询',
  tags: ['select'],
  answerSql: 'SELECT * FROM student;',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',

  sqlType: 'select',
}

export default challenge
