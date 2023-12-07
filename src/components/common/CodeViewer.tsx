import type { Challenge } from '@/type'
import { FC, useMemo } from 'react'
import { format } from 'sql-formatter'
import { MonacoEditor } from 'monaco-editor-component/react'
import '@/monacoEditorWorker'

interface CodeViewerProps {
  initSql: Challenge['initSql']
}

const CodeViewer: FC<CodeViewerProps> = ({ initSql }) => {
  const value = useMemo(() => format(initSql), [initSql])
  return (
    <div className="rounded-md border border-gray-300 p-2">
      <MonacoEditor
        value={value}
        height={300}
        options={{
          readOnly: true,
          fontSize: 14
        }}
        language="sql"
      />
    </div>
  )
}

export default CodeViewer
