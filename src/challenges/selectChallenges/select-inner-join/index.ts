import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-inner-join',
  title: ' 关联查询 - INNER JOIN',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  answerSql:
    'SELECT s.id id, s.name s_name, s.age s_age, c.id class_id, c.name class_name, c.teacher c_teacher FROM student s INNER JOIN class_info c ON s.class_id = c.id;',
  showTableSql:
    'SELECT s.id id, s.name name, s.age age, c.id class_id, c.name class_name, c.teacher teacher FROM student s, class_info c WHERE s.class_id = c.id;',
  defaultSql: 'SELECT * FROM student JOIN class;',
  tags: ['select', 'inner-join'],
  category: 'select',

  hit: 'INNER JOIN 用于内连接，查询两个表的交集数据，通常用于多表关联查询。并且需要使用别名来区分两个表的字段。'
}

export default challenge
