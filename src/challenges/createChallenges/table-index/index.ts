import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'create-table-index',
  title: '创建表 - Index',
  content,
  difficulty: 2,
  category: '创建表',
  tags: ['create'],
  answerSql: initSql,
  showTableSql: '',
  author: 'Talljack',
  initSql: '',
  defaultSql: `CREATE TABLE IF NOT EXISTS student (
    id INT NOT NULL AUTOINCREMENT,
    PRIMARY KEY (id)
);`,

  sqlType: 'create'
}

export default challenge
