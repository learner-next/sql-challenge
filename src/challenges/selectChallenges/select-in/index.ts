import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-in',
  title: '条件查询 - IN查询',
  content,
  difficulty: 1,
  category: '条件查询',
  hit: '请仔细查看示例中的基本语句，WHERE关键字为条件查询，IN为在...中，NOT IN为不在...中。',
  tags: ['select'],
  answerSql:
    'SELECT name, age, gender, address FROM student WHERE address IN ("北京市", "上海市");',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',

  sqlType: 'select'
}

export default challenge
