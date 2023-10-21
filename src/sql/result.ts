import type { Challenge } from '@/type'
import type { QueryExecResult } from 'sql.js'
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
  userResults: QueryExecResult[],
  answerResults: QueryExecResult[],
  challenge: Challenge
) => {
  if (
    challenge.sqlType === 'create' &&
    userResults.length === 0 &&
    answerResults.length > 0
  ) {
    return RESULT_STATUS_ENUM.SUCCEED
  }
  if (!userResults?.[0] || !answerResults?.[0]) {
    return RESULT_STATUS_ENUM.ERROR
  }
  const userColumns = userResults[0].columns
  const answerColumns = answerResults[0].columns
  if (JSON.stringify(userColumns) !== JSON.stringify(answerColumns)) {
    return RESULT_STATUS_ENUM.ERROR
  }
  const userValues = userResults[0].values
  const answerValues = answerResults[0].values
  if (JSON.stringify(userValues) !== JSON.stringify(answerValues)) {
    return RESULT_STATUS_ENUM.ERROR
  }
  return RESULT_STATUS_ENUM.SUCCEED
}
