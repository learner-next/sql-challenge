import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'delete-columns',
  title: '更新 - DELETE COLUMNS',
  content,
  difficulty: 1,
  category: '删除列',
  hit: '请仔细查看示例中的基本语句。DELETE COLUMNS 语句以及相关的 WHERE 子句。',
  tags: ['delete'],
  answerSql: `ALTER TABLE customers DROP COLUMN email;
ALTER TABLE customers DROP COLUMN birthday;`,
  showTableSql: 'SELECT * FROM customers;',
  author: 'Talljack',
  initSql,
  defaultSql: `ALTER TABLE customers;`,

  sqlType: 'delete',
  needRunAnswerSql: false,
}

export default challenge
