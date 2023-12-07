import type { Challenge, SqlResultType } from '@/type'
import { removeSqlSpace } from '@/utils'

// user result status enum
export const RESULT_STATUS_ENUM = {
  DEFAULT: -1,
  ERROR: 0,
  SUCCEED: 1
}

// user result status map
export const RESULT_STATUS_MAP = {
  '-1': ' 未执行 ',
  0: '❌ 错误 ',
  1: '✅ 正确'
}

export const checkedSqlResult = (
  userResults: SqlResultType,
  answerResults: SqlResultType,
  challenge: Challenge,
  message?: string,
  userSql?: string
) => {
  // does't throw error is success when create table and insert into values
  if (
    challenge.sqlType !== 'select' &&
    !message &&
    userSql &&
    removeSqlSpace(userSql) === removeSqlSpace(challenge.answerSql)
  ) {
    return RESULT_STATUS_ENUM.SUCCEED
  }
  if (userResults.length === 0 && answerResults.length === 0) {
    return RESULT_STATUS_ENUM.SUCCEED
  }
  if (!userResults?.length || !answerResults?.length) {
    return RESULT_STATUS_ENUM.ERROR
  }
  const userColumns = Object.keys(userResults?.[0])
  const answerColumns = Object.keys(answerResults?.[0])
  if (
    JSON.stringify(userColumns.sort()) !== JSON.stringify(answerColumns.sort())
  ) {
    return RESULT_STATUS_ENUM.ERROR
  }
  if (JSON.stringify(userResults) !== JSON.stringify(answerResults)) {
    return RESULT_STATUS_ENUM.ERROR
  }
  return RESULT_STATUS_ENUM.SUCCEED
}
