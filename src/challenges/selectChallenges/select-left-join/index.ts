import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-left-join',
  title: ' 关联查询 - LEFT JOIN',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  answerSql:
    'SELECT s.id s_id, s.name s_name, age s_age, s.class_name s_class, s.score s_score, teacher c_teacher FROM student s LEFT JOIN class_info c ON s.class_name = c.name;',
  showTableSql:
    'SELECT s.id s_id, s.name s_name, age s_age, s.class_name s_class, s.score s_score, teacher c_teacher FROM student s, class_info c WHERE s.class_name = c.name;',
  defaultSql: 'SELECT * FROM student LEFT JOIN class;',
  tags: ['select', 'left-join', 'right-join'],
  category: 'select',

  hit: 'LEFT JOIN 用于左连接，查询左表的所有数据，右表的匹配数据，通常用于一对多关联查询。并且需要使用别名来区分两个表的字段。RIGHT JOIN 用于右连接，查询右表的所有数据，左表的匹配数据，通常用于多对一关联查询。并且需要使用别名来区分两个表的字段。',
}

export default challenge
