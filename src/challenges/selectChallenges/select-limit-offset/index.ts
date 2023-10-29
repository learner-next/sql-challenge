import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-limit-offset',
  title: '高级查询 - LIMIT 和 OFFSET',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  answerSql: 'SELECT * FROM student LIMIT 5 OFFSET 5;',
  answer: '',
  defaultSql: 'SELECT * FROM student;',
  tags: ['select', 'limit', 'offset'],
  category: 'select',
  type: 'main',
  showTableSql: 'SELECT * FROM student;',
  index: 11
}

export default challenge
