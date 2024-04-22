import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-having',
  title: ' 高级查询 - HAVING',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  sqlType: 'select',
  category: 'select',
  tags: ['select', 'having'],
  answerSql:
    'SELECT className, AVG(score) avg_score FROM student GROUP BY className HAVING avg_score > 80 OR avg_score < 20 ORDER BY avg_score DESC;',
  defaultSql: 'SELECT className, score FROM student;',
  showTableSql: 'SELECT * FROM student;',

  hit: 'Having 子句用于在 GROUP BY 语句中指定过滤条件。可使用多个聚合函数，如 COUNT ()、SUM ()、AVG () 等来进行过滤。',
}

export default challenge
