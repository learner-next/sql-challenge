import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'update-values',
  title: '更新 - UPDATE VALUES',
  content,
  difficulty: 1,
  category: '更新数据',
  hit: '请仔细查看示例中的基本语句。UPDATE VALUES 语句以及相关的 WHERE 子句。',
  tags: ['update'],
  answerSql: `UPDATE user SET email = 'wang_xiao@gmail.com', password = 'wang_xiao7898' WHERE id = 3;`,
  showTableSql: 'SELECT * FROM user;',
  author: 'Talljack',
  initSql,
  defaultSql: `UPDATE user SET email = '';`,

  sqlType: 'update'
}

export default challenge
