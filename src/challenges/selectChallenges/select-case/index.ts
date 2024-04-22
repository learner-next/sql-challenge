import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-case',
  title: '高级查询 - CASE',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  showTableSql: 'select * from student;',
  sqlType: 'select',
  tags: ['select', 'case'],
  answerSql:
    'SELECT name, age, gender, CASE WHEN address LIKE "%北京市%" THEN "北京市" WHEN address LIKE "%上海市%" THEN "上海市" ELSE "其他" END AS address FROM student ORDER BY CASE WHEN age < 20 THEN age ELSE name END DESC;',
  category: '高级查询',
  defaultSql: 'SELECT * FROM student;',
  hit: '使用CASE WHEN ... THEN ... ELSE ... END语句，根据address字段的值，将北京市和上海市的学生地址改为北京市和上海市，其他的学生地址改为其他，然后根据年龄小于20的学生按年龄降序排列，其他学生按姓名降序排列。包含字符串可以使用LIKE关键字，例如：address LIKE "%北京市%"。',
}

export default challenge
