import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-as',
  title: ' 基础查询 - 别名 ',
  content,
  difficulty: 1,
  category: ' 查询 ',
  hit: ' 请仔细查看示例中的基本语句，AS 关键字为字段取别名，字段名不可重复，且可省略 ',
  tags: ['select', 'as'],
  answerSql:
    'SELECT s.name `姓名`, s.age `年龄`, birthday, address FROM student s;',
  showTableSql: 'SELECT * FROM student;',
  author: 'Talljack',
  initSql,
  defaultSql: 'SELECT * FROM student;',

  sqlType: 'select'
}

export default challenge
