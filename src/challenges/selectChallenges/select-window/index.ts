import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-window',
  title: '查询进阶 - 窗口函数',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 3,
  showTableSql: 'SELECT * FROM employees;',
  sqlType: 'select',
  tags: ['select', 'window function'],
  answerSql: `SELECT employee_id, first_name, last_name, salary, department_id,
      LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY salary DESC) AS before_salary,
      FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) AS first_salary,
      LAST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) AS last_salary
    FROM employees;`,
  category: '查询进阶',
  defaultSql: 'SELECT * FROM employees;',
  hit: 'LAG() 用于获取前一行的数据，FIRST_VALUE() 用于获取分组中第一行的数据，LAST_VALUE() 用于获取分组中最后一行的数据。'
}

export default challenge
