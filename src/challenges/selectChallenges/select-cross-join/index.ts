import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-cross-join',
  title: '关联查询 - CROSS JOIN',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  showTableSql:
    'select e.id e_id, e.name e_name, e.salary e_salary, d.id d_id, d.name d_name FROM employees e CROSS JOIN departments d;',
  sqlType: 'select',
  tags: ['select', 'cross join'],
  answerSql:
    'SELECT e.name employee_name, e.salary employee_salary, d.name department_name FROM employees e CROSS JOIN departments d WHERE e.salary >= 3000;',
  category: '高级查询',
  defaultSql: 'SELECT * FROM employees CROSS JOIN departments d;',
  hit: '使用CROSS JOIN关键字，查询工资大于等于3000的员工和部门名称。',
  type: 'main'
}

export default challenge
