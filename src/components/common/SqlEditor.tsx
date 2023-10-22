import type { Challenge } from '@/type'
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import { FC, useRef, useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import { Button } from '@components/ui/button'
import { format } from 'sql-formatter'
import { initSql, runSql } from '@/sql/db'
import type { Database, QueryExecResult } from 'sql.js'
import { useToast } from '@/components/ui/use-toast'

interface Props {
  challenge: Challenge
  editorStyle?: CSSProperties
  className?: string
  onSubmit: (
    sql: string,
    result: QueryExecResult[],
    answerResult: QueryExecResult[],
    message?: string
  ) => void
  getAllTableResults?: (allTableResults: QueryExecResult[]) => void
}

self.MonacoEnvironment = {
  getWorker: function () {
    return new EditorWorker()
  }
}

const SqlEditor: FC<Props> = ({
  challenge,
  editorStyle,
  onSubmit,
  className,
  getAllTableResults
}) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const [db, setDb] = useState<Database>() // [db, setDb]
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (editorRef) {
      setEditor(editor => {
        if (editor) return editor

        return monaco.editor.create(editorRef.current!, {
          value: '',
          language: 'sql',
          theme: 'vs-dark',
          formatOnPaste: true,
          automaticLayout: true,
          fontSize: 16,
          minimap: {
            enabled: false
          }
        })
      })
    }

    return () => editor?.dispose()
  }, [editorRef, editor])

  const handleSubmit = () => {
    const value = editor?.getValue()
    if (value && db) {
      try {
        const userResult = runSql(db, value)
        const answerResult = runSql(db, challenge.answer || challenge.answerSql)
        onSubmit(value, userResult, answerResult)
      } catch (error) {
        toast({
          description: (error as Error).message,
          duration: 5000
        })
        onSubmit(value, [], [], (error as Error).message)
      }
    }
  }
  const handleFormat = () => {
    const value = editor?.getValue()
    if (value) {
      editor?.setValue(format(value, { language: 'sql' }))
    }
  }
  const handleClear = () => {
    editor?.setValue('')
  }
  useEffect(() => {
    if (editor) {
      editor.setValue(challenge?.defaultSql)
    }
    initSql(challenge?.initSql).then(db => {
      setDb(db)
      try {
        const allTableResults = runSql(db, challenge.showTableSql)
        getAllTableResults?.(allTableResults)
      } catch (error) {
        console.error(error)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, challenge?.initSql, challenge?.showTableSql])
  return (
    <div className={className}>
      <div ref={editorRef} style={{ ...editorStyle }} />
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
