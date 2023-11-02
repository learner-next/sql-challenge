import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'update-table',
  title: '更新 - 更新表',
  content,
  difficulty: 1,
  category: '更新',
  hit: '请仔细查看示例中的基本语句。',
  tags: ['select'],
  answerSql: `ALTER TABLE user ADD COLUMN address VARCHAR(255);
ALTER TABLE user MODIFY COLUMN email TEXT;`,
  showTableSql: 'SELECT * FROM user;',
  author: 'Talljack',
  initSql,
  defaultSql: 'ALTER TABLE user;',
  type: 'main',
  sqlType: 'update',
  index: 1,
  needRunAnswerSql: false
}

export default challenge
