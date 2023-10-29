import content from './content.md?raw'
import type { Challenge } from '@/type'
import initSql from './initSql.sql?raw'

const challenge: Challenge = {
  id: 'select-base',
  title: '查询 - 基础查询',
  content,
  difficulty: 1,
  category: '查询',
  tags: ['select'],
  answerSql: 'SELECT * FROM student;',
  answer: '',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',
  type: 'main',
  sqlType: 'select',
  index: 1
}

export default challenge
