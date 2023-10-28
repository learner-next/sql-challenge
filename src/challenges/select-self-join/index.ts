import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-self-join',
  title: '高级查询 - 关联查询 - 自连接',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  tags: ['select', 'self join'],
  type: 'main',
  sqlType: 'select',
  defaultSql: 'select * from family_members;',
  answerSql: `SELECT
    child.member_name AS Child_Name,
    father.member_name AS Father_Name,
    mother.member_name AS Mother_Name
FROM family_members AS child
LEFT JOIN family_members AS father ON child.father_id = father.member_id
LEFT JOIN family_members AS mother ON child.mother_id = mother.member_id;`,
  answer: '',
  category: '高级查询',
  hit: '请仔细查看示例中的基本语句，ORDER BY关键字用于排序查询。',
  showTableSql: 'select * from family_members;'
}

export default challenge
