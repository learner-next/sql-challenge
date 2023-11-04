import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-where',
  title: '条件查询 - 运算符查询',
  content,
  difficulty: 1,
  category: '条件查询',
  hit: '请仔细查看示例中的基本语句，WHERE关键字为条件查询，=为等于，<>为不等于，>为大于，<为小于，>=为大于等于，<=为小于等于，BETWEEN xx AND xx代码在某个区间内。',
  tags: ['select'],
  answerSql: 'SELECT * FROM student WHERE age BETWEEN 17 AND 30;',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',

  sqlType: 'select'
}

export default challenge
