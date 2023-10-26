import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'challenge9',
  index: 9,
  title: '基础语法 - 条件查询 - 逻辑查询',
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
  defaultSql: 'SELECT name, age, gender, address FROM student;'
}

export default challenge
