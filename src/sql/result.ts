import type { Challenge, SqlResultType } from '@/type'
/**
 * 结果状态枚举
 */
export const RESULT_STATUS_ENUM = {
  DEFAULT: -1,
  ERROR: 0,
  SUCCEED: 1
}

/*
 * 结果状态信息映射
 */
export const RESULT_STATUS_MAP = {
  '-1': '未执行',
  0: '❌ 错误',
  1: '✅ 正确'
}

export const checkedSqlResult = (
  userResults: SqlResultType[],
  answerResults: SqlResultType[],
  challenge: Challenge,
  message?: string,
  userSql?: string
) => {
  // does't throw error is success when create table and insert into values
  if (
    challenge.sqlType === 'create' &&
    !message &&
    userSql &&
    JSON.stringify(userResults) === JSON.stringify(answerResults)
  ) {
    return RESULT_STATUS_ENUM.SUCCEED
  }
  if (!userResults || !answerResults) {
    return RESULT_STATUS_ENUM.ERROR
  }
  const userColumns = Object.keys(userResults)
  const answerColumns = Object.keys(answerResults)
  if (
    JSON.stringify(userColumns.sort()) !== JSON.stringify(answerColumns.sort())
  ) {
    return RESULT_STATUS_ENUM.ERROR
  }
  if (JSON.stringify(userResults) !== JSON.stringify(userResults)) {
    return RESULT_STATUS_ENUM.ERROR
  }
  return RESULT_STATUS_ENUM.SUCCEED
}
