import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-having',
  title: '查询 - 高级查询 - having 子句',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  category: 'select',
  tags: ['select', 'having'],
  answerSql:
    'SELECT name, class, AVG(score) AS avg_score FROM student GROUP BY class HAVING avg_score > 80 OR avg_score < 20 ORDER BY avg_score DESC;',
  defaultSql: 'SELECT name, class, score FROM student;',
  showTableSql: 'SELECT * FROM student;',
  type: 'main',
  index: 17,
  hit: 'Having 子句用于在 GROUP BY 语句中指定过滤条件。可使用多个聚合函数，如 COUNT()、SUM()、AVG() 等来进行过滤。'
}

export default challenge
