import type { Challenge } from '@/type'
import content from './content.md?raw'
import initSql from './initSql.sql?raw'

const challenge: Challenge = {
  id: 'create-view',
  title: '创建视图',
  content: content,
  difficulty: 2,
  category: '创建视图',
  tags: ['create', 'view'],
  answerSql: `CREATE VIEW IF NOT EXISTS employee_department AS
  SELECT e.id id, e.name name, e.age age, e.email email, e.salary salary, d.name AS department_name, d.address address
  FROM employees e
  INNER JOIN departments d
  ON e.department_id = d.id;`,
  showTableSql:
    'SELECT * FROM employees e INNER JOIN departments d ON e.department_id = d.id;',
  author: 'Talljack',
  initSql,
  defaultSql: `CREATE VIEW employee_department AS SELECT * FROM employees;`,

  sqlType: 'create'
}

export default challenge
