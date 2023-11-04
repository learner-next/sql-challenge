import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-like',
  title: '条件查询 - Like',
  content,
  difficulty: 1,
  category: '条件查询',
  hit: '请仔细查看示例中的基本语句，WHERE关键字为条件查询，LIKE为模糊查询，%为任意字符，_为单个字符。',
  tags: ['select'],
  answerSql:
    'SELECT name, age, gender, address FROM student WHERE address LIKE "%北京市%";',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',

  sqlType: 'select'
}

export default challenge
