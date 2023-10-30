import initSqlJs from 'sql.js'
import type { SqlJsStatic, Database } from 'sql.js'

let SQL: SqlJsStatic

export const initSql = async (initSql?: string) => {
  if (!SQL) {
    SQL = await initSqlJs({
      locateFile: () => {
        return '/static/sql-wasm.wasm'
      }
    })
  }
  const db = new SQL.Database()
  // 初始化数据库
  if (initSql) {
    db.run(initSql)
  }
  return db
}

// 执行 sql
export const runSql = (db: Database, sql: string) => {
  return db.exec(sql)
}
