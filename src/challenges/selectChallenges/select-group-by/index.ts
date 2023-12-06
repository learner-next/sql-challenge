import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-group-by',
  title: '高级查询 - GROUP BY',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  answerSql:
    'SELECT class, subject, SUM(score) `total_score` FROM student GROUP by subject;',
  defaultSql: 'SELECT * FROM student;',
  tags: ['select', 'group by'],
  category: 'select',

  showTableSql: 'SELECT * FROM student;'
}

export default challenge
