import { useEffect, useState } from 'react'
import type { CSSProperties, FC } from 'react'
import { Button } from '@components/ui/button'
import { format } from 'sql-formatter'
import { MonacoEditor } from 'monaco-editor-component/react'
import { initSql, runSql } from '@/sql/db'
import { useToast } from '@/components/ui/use-toast'
import type { Challenge, SqlResultType } from '@/type'
import '@/monacoEditorWorker'

interface Props {
  challenge: Challenge
  editorStyle?: CSSProperties
  className?: string
  onSubmit: (
    sql: string,
    result: SqlResultType,
    answerResult: SqlResultType,
    message?: string
  ) => void
  getAllTableResults?: (allTableResults: SqlResultType) => void
  sqlDefaultHit?: string
}

const SqlEditor: FC<Props> = ({
  challenge,
  editorStyle,
  onSubmit,
  className,
  getAllTableResults,
  sqlDefaultHit = '-- 请在此处输入 SQL 语句',
}) => {
  const { toast } = useToast()
  const [value, setValue] = useState(challenge?.defaultSql)

  const handleSubmit = () => {
    const formattedValue = format(value, { language: 'sql' })
    if (formattedValue) {
      try {
        const userResult = runSql(formattedValue)
        // create or update run twice sql will throw error, only validate user's sql return 1
        let answerResult = 0
        if (challenge?.needRunAnswerSql !== false)
          answerResult = runSql(challenge.answerSql)

        onSubmit(
          formattedValue,
          userResult,
          answerResult as unknown as SqlResultType,
        )
      }
      catch (error) {
        toast({
          description: (error as Error).message,
          duration: 5000,
        })
        onSubmit(value, [], [], (error as Error).message)
      }
    }
  }
  const handleFormat = () => {
    setValue(format(value, { language: 'sql' }))
  }
  const handleClear = () => {
    setValue('')
  }
  useEffect(() => {
    setValue(
      `${sqlDefaultHit}
${challenge.defaultSql}`,
    )
    initSql(challenge?.initSql)
    try {
      const allTableResults = runSql(challenge?.showTableSql)
      getAllTableResults?.(allTableResults)
    }
    catch (error) {
      console.error(error)
    }
  }, [challenge.initSql, challenge.showTableSql, challenge.defaultSql])
  return (
    <div className={className}>
      <MonacoEditor
        value={value}
        height={300}
        style={{ ...editorStyle }}
        options={{
          fontSize: 14,
        }}
        language="sql"
        onChange={setValue}
      />
      <div className="ml-2 mt-2 flex items-center gap-2">
        <Button className="w-[120px]" onClick={() => handleSubmit()}>
          运行
        </Button>
        <Button variant="outline" onClick={() => handleFormat()}>
          格式化
        </Button>
        <Button variant="outline" onClick={() => handleClear()}>
          清空
        </Button>
      </div>
    </div>
  )
}

export default SqlEditor
