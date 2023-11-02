import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-union-union-all',
  title: '查询 - 基本查询 - UNION 和 UNION ALL',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 1,
  sqlType: 'select',
  answerSql: 'SELECT age FROM student UNION ALL SELECT age FROM teacher;',
  defaultSql: 'SELECT * FROM student;',
  tags: ['select', 'union', 'union all'],
  category: 'select',
  type: 'main',
  showTableSql:
    'SELECT student.id AS student_id, student.name AS student_name, student.age AS student_age, teacher.id AS teacher_id, teacher.name AS teacher_name, teacher.age AS teacher_age FROM student, teacher;'
}

export default challenge
