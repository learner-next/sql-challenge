import type { Challenge } from '@/type'
import content from './content.md?raw'
import initSql from './initSql.sql?raw'

const challenge: Challenge = {
  id: 'create-table-index',
  title: '创建表 - Index',
  content: content,
  difficulty: 2,
  category: '创建表',
  tags: ['create'],
  answerSql: initSql,
  answer: '',
  showTableSql: '',
  author: 'Talljack',
  initSql: '',
  defaultSql: `CREATE TABLE IF NOT EXISTS student (
    id INT NOT NULL AUTOINCREMENT,
    PRIMARY KEY (id)
);`,
  type: 'main',
  sqlType: 'create'
}

export default challenge
