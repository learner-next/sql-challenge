import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'challenge5',
  title: '基础语法 - 条件查询 - WHERE',
  content,
  difficulty: 1,
  category: '条件查询',
  hit: '请仔细查看示例中的基本语句，WHERE关键字为条件查询，=为等于，<>为不等于，>为大于，<为小于，>=为大于等于，<=为小于等于',
  tags: ['select'],
  answerSql: 'SELECT * FROM student WHERE name = "小丽";',
  answer: '',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',
  type: 'main',
  sqlType: 'select'
}

export default challenge
