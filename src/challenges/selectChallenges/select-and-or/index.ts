import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-and-or',
  title: '条件查询 - And 和 Or',
  content,
  initSql,
  difficulty: 1,
  type: 'main',
  sqlType: 'select',
  answer: '',
  answerSql:
    'SELECT name, age, gender, address FROM student WHERE age <= 20 AND address LIKE "%北京市%";',
  tags: ['where', 'select'],
  category: '基础语法',
  author: 'Talljack',
  showTableSql: 'SELECT * FROM student;',
  defaultSql: 'SELECT name, age, gender, address FROM student;',
  index: 10
}

export default challenge
