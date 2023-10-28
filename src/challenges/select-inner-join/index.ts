import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-inner-join',
  title: '高级查询 - 关联查询 - inner-join',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  answerSql:
    'SELECT s.id id, s.name s_name, age, c.id class_id, c.name class_name, teacher FROM student s INNER JOIN class c ON s.class_id = c.id;',
  showTableSql:
    'SELECT s.id id, name, age, c.id class_id, c.name class_name, teacher FROM student s FULL JOIN class c ON s.class_id = c.id;',
  defaultSql: 'SELECT * FROM student JOIN class;',
  tags: ['select', 'inner-join'],
  category: 'select',
  type: 'main',
  index: 20,
  hit: 'INNER JOIN 用于内连接，查询两个表的交集数据，通常用于多表关联查询。并且需要使用别名来区分两个表的字段。'
}

export default challenge
