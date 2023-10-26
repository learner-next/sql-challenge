import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-group-by',
  title: '查询 - 高级查询 - 分组',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  answerSql:
    'SELECT class, subject, SUM(score) AS total_score FROM student GROUP by class, subject;',
  answer: '',
  defaultSql: 'SELECT * FROM student;',
  tags: ['select', 'group by'],
  category: 'select',
  type: 'main',
  showTableSql: 'SELECT * FROM student;',
  index: 10
}

export default challenge
