import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-field',
  title: '基础查询 - 选择查询',
  content,
  difficulty: 1,
  category: '查询',
  hit: '请仔细查看示例中的基本语句。',
  tags: ['select'],
  answerSql: 'SELECT name, age, birthday AS 生日, address FROM student;',
  answer: '',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',
  type: 'main',
  sqlType: 'select',
  index: 2
}

export default challenge
