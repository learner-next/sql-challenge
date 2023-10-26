import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-limit-offset',
  title: '查询 - 高级查询 - LIMIT和OFFSET',
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
  index: 12
}

export default challenge
