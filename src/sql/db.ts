import alasql from 'alasql'

export const initSql = async (initSql?: string) => {
  // 初始化数据库
  if (initSql) alasql(initSql)
}

// 执行 sql
export const runSql = (sql: string) => {
  if (!sql) return []
  return alasql(sql)
}
