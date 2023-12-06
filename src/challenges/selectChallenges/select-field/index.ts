import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-field',
  title: ' 基础查询 - 选择查询 ',
  content,
  difficulty: 1,
  category: ' 查询 ',
  hit: ' 请仔细查看示例中的基本语句。',
  tags: ['select'],
  answerSql: 'SELECT name, age, birthday, address FROM student;',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',

  sqlType: 'select'
}

export default challenge
