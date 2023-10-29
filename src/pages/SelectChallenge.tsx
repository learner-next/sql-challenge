import SqlEditor from '@/components/common/SqlEditor'
import { useParams } from '@tanstack/react-router'
import { getChallengeByKey } from '@/challenges'
import type { QueryExecResult } from 'sql.js'
import { useEffect, useState } from 'react'
import { RESULT_STATUS_ENUM, checkedSqlResult } from '@/sql/result'
import type { Challenge } from '@/type'
import SqlQuestion from '@/components/common/SqlQuestion'
import SqlResult from '@/components/common/SqlResult'
import AccordionResult from '@/components/common/AccordionResult'
import CodeViewer from '@/components/common/CodeViewer'
import allChallenges from '@/challenges/selectChallenges'
function SqlChallenge() {
  const [userResults, setUserResults] = useState<QueryExecResult[]>([])
  const [answerResults, setAnswerResults] = useState<QueryExecResult[]>([])
  const [allTableResults, setAllTableResults] = useState<QueryExecResult[]>([])
  const [resultStatus, setResultStatus] = useState<number>(
    RESULT_STATUS_ENUM.DEFAULT
  )
  const [errorMessage, setErrorMessage] = useState<string>()
  const [challenge, setChallenge] = useState<Challenge>()
  const [collapsedUserResult, setCollapsedUserOpenResult] = useState(true)
  const params = useParams({
    from: '/select-challenge/$challengeId'
  })

  useEffect(() => {
    setChallenge(getChallengeByKey(params.challengeId))
  }, [params.challengeId])
  if (!challenge) return null
  const onSubmit = (
    _sql: string,
    userResults: QueryExecResult[],
    answerResults: QueryExecResult[],
    message?: string
  ) => {
    setUserResults(userResults)
    setAnswerResults(answerResults)
    setErrorMessage(message)
    setResultStatus(
      checkedSqlResult(userResults, answerResults, challenge, message)
    )
    setCollapsedUserOpenResult(false)
  }
  const getAllTableResults = (allTableResults: QueryExecResult[]) => {
    setAllTableResults(allTableResults)
  }
  return (
    <div className="my-4 ml-4 flex p-2">
      <SqlQuestion
        challenge={challenge}
        resultStatus={resultStatus}
        allChallenges={allChallenges}
      />
      <div className="w-1/2 rounded-md border border-gray-300 p-2">
        <SqlEditor
          challenge={challenge}
          onSubmit={onSubmit}
          getAllTableResults={getAllTableResults}
          className="border border-gray-300 pb-2"
          editorStyle={{ height: '300px' }}
        />
        <AccordionResult title="查看执行结果" collapsed={collapsedUserResult}>
          <SqlResult
            // 创建的时候主动展示结果表
            sqlResults={userResults.length > 0 ? userResults : answerResults}
            resultStatus={resultStatus}
            errorMessage={errorMessage}
            type="user"
          />
        </AccordionResult>
        <AccordionResult title="查看提示">
          <div>{challenge?.hit ?? '请仔细阅读示例中的相关 SQL 语句'}</div>
        </AccordionResult>
        <AccordionResult title="查看数据表">
          {allTableResults.length > 0 ? (
            <SqlResult sqlResults={allTableResults} type="system" />
          ) : (
            <div>请先创建数据表</div>
          )}
        </AccordionResult>
        <AccordionResult title="查看建表语句">
          <CodeViewer initSql={challenge.initSql || challenge.answerSql} />
        </AccordionResult>
        <AccordionResult title="查看答案">
          <CodeViewer initSql={challenge.answerSql} />
        </AccordionResult>
      </div>
    </div>
  )
}
export default SqlChallenge
