import content from './content.md?raw'
import initSql from './initSql.sql?raw'
import type { Challenge } from '@/type'

const challenge: Challenge = {
  id: 'select-all-any',
  title: '高级查询 - ANY 和 ALL',
  content,
  initSql,
  author: 'Talljack',
  difficulty: 2,
  answerSql: `SELECT product_name, price FROM products WHERE price <> (SELECT sale_price FROM sales);`,
  tags: ['select', 'subquery', 'any', 'all'],
  type: 'main',
  category: '子查询',
  sqlType: 'select',
  showTableSql:
    'SELECT products.product_name AS p_product_name, products.price AS p_price, sales.product_name AS s_product_name, sales.sale_price AS s_price FROM products, sales WHERE products.product_name = sales.product_name',
  defaultSql: 'SELECT * FROM products;',
  hit: 'ANY 和 ALL 是用于子查询的关键字，ANY 表示满足任意一个条件即可，ALL 表示满足所有条件才行。'
}

export default challenge
