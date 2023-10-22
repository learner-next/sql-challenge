import content from './content.md?raw'
import type { Challenge } from '@/type'
import initSql from './initSql.sql?raw'

const challenge: Challenge = {
  id: 'challenge2',
  title: '基础语法 - 查询 - 基础查询',
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
  sqlType: 'select'
}

export default challenge
