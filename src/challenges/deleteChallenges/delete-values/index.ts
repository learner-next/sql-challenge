import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'delete-values',
  title: '删除 - DELETE VALUES',
  content,
  difficulty: 1,
  category: '删除数据',
  hit: '请仔细查看示例中的基本语句。DELETE VALUES 语句以及相关的 WHERE 子句。',
  tags: ['delete'],
  answerSql: `DELETE FROM users WHERE name = '小王' OR name = '小李';`,
  showTableSql: 'SELECT * FROM user;',
  author: 'Talljack',
  initSql,
  defaultSql: `DELETE FROM users;`,

  sqlType: 'delete'
}

export default challenge
