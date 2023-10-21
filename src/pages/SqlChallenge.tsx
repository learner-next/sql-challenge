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
function SqlChallenge() {
  const [userResults, setUserResults] = useState<QueryExecResult[]>([])
  const [answerResults, setAnswerResults] = useState<QueryExecResult[]>([])
  const [resultStatus, setResultStatus] = useState<number>(
    RESULT_STATUS_ENUM.DEFAULT
  )
  const [errorMessage, setErrorMessage] = useState<string>()
  const [challenge, setChallenge] = useState<Challenge>()
  const params = useParams({
    from: '/sqlChallenge/$challengeId'
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
    setResultStatus(checkedSqlResult(userResults, answerResults, challenge))
  }
  return (
    <div className="my-4 ml-4 flex p-2">
      <SqlQuestion challenge={challenge} resultStatus={resultStatus} />
      <div className="w-1/2 rounded-md border border-gray-300 p-2">
        <SqlEditor
          challenge={challenge}
          onSubmit={onSubmit}
          className="border border-gray-300 py-2"
          editorStyle={{ height: '300px' }}
        />
        <AccordionResult title="查看执行结果">
          <SqlResult
            sqlResults={userResults.length > 0 ? userResults : answerResults}
            resultStatus={resultStatus}
            errorMessage={errorMessage}
          />
        </AccordionResult>
      </div>
    </div>
  )
}
export default SqlChallenge
