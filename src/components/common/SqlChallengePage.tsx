import SqlEditor from '@/components/common/SqlEditor'
import { useParams } from '@tanstack/react-router'
import { getChallengeByKey } from '@/challenges'
import { useEffect, useState } from 'react'
import { RESULT_STATUS_ENUM, checkedSqlResult } from '@/sql/result'
import type { Challenge, SqlResultType } from '@/type'
import SqlQuestion from '@/components/common/SqlQuestion'
import SqlResult from '@/components/common/SqlResult'
import AccordionResult from '@/components/common/AccordionResult'
import CodeViewer from '@/components/common/CodeViewer'
import type { FC } from 'react'

interface SqlChallengePageProps {
  allChallenges: Challenge[]
  fromPath: string
}

const SqlChallengePage: FC<SqlChallengePageProps> = ({
  fromPath = '/select-challenge',
  allChallenges = []
}) => {
  const [userResults, setUserResults] = useState<SqlResultType>([])
  const [answerResults, setAnswerResults] = useState<SqlResultType>([])
  const [allTableResults, setAllTableResults] = useState<SqlResultType>([])
  const [resultStatus, setResultStatus] = useState<number>(
    RESULT_STATUS_ENUM.DEFAULT
  )
  const [errorMessage, setErrorMessage] = useState<string>()
  const [challenge, setChallenge] = useState<Challenge>()
  const [collapsedUserResult, setCollapsedUserOpenResult] = useState(true)
  const params = useParams({
    from: `${fromPath as '/create-challenge'}/$challengeId`
  })

  useEffect(() => {
    // 重置状态
    setChallenge(getChallengeByKey(params.challengeId, allChallenges))
    setUserResults([])
    setAnswerResults([])
    setAllTableResults([])
    setResultStatus(RESULT_STATUS_ENUM.DEFAULT)
    setErrorMessage('')
  }, [params.challengeId, allChallenges])
  if (!challenge) return null
  const onSubmit = (
    _sql: string,
    userResults: SqlResultType,
    answerResults: SqlResultType,
    message?: string
  ) => {
    setUserResults(userResults)
    setAnswerResults(answerResults)
    setErrorMessage(message)
    setResultStatus(
      checkedSqlResult(userResults, answerResults, challenge, message, _sql)
    )
    setCollapsedUserOpenResult(false)
  }
  const getAllTableResults = (allTableResults: SqlResultType) => {
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
export default SqlChallengePage
