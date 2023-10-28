import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-full-join',
  title: '高级查询 - 关联查询 - full-join',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  answerSql:
    'SELECT s.id id, s.name name, age, course, IFNULL(sc.score, 0) score FROM student s FULL JOIN score sc ON s.name = sc.name;',
  showTableSql:
    'SELECT s.id id, s.name name, age, course, score FROM student s FULL JOIN score sc ON s.name = sc.name;',
  defaultSql: 'SELECT * FROM student FULL JOIN score;',
  tags: ['select', 'full-join'],
  category: 'select',
  type: 'main',
  index: 21,
  hit: 'FULL JOIN 用于全连接，查询两个表的并集数据，通常用于多表关联查询。并且需要使用别名来区分两个表的字段。'
}

export default challenge
