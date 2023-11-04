import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-exists',
  title: '高级查询 - 子查询 - EXISTS',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  category: 'select',
  tags: ['select', 'exists'],
  answerSql: `SELECT * FROM student WHERE NOT EXISTS (SELECT 1 FROM class WHERE student.class = class.class_name);`,
  defaultSql: 'SELECT * FROM student;',
  showTableSql:
    'SELECT student.name AS s_name, student.class AS s_class, student.score as s_score, class.class_name AS c_class_name, class.teacher AS c_teacher  FROM student FULL JOIN class ON class.class_name = student.class;',

  hit: 'EXISTS 用于判断子查询是否存在，如果子查询返回结果集，则返回 true，否则返回 false。'
}

export default challenge
