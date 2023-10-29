import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-subquery',
  title: '高级查询 - 子查询',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  answerSql:
    'SELECT name, subject, score FROM student WHERE score > (SELECT AVG(score) FROM student GROUP BY class);',
  answer: '',
  tags: ['select', 'subquery'],
  type: 'main',
  category: '子查询',
  sqlType: 'select',
  showTableSql: 'SELECT * FROM student;',
  defaultSql: 'SELECT * FROM student;',
  hit: '子查询是指嵌套在其他查询中的查询，子查询可以嵌套多层，但是不建议嵌套太多层，会影响性能。子查询可以用于条件查询、插入、更新、删除等语句中。',
  index: 15
}

export default challenge
