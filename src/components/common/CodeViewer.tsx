import type { Challenge } from '@/type'
import * as monaco from 'monaco-editor'
import { FC, useRef, useEffect } from 'react'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import { format } from 'sql-formatter'

interface CodeViewerProps {
  initSql: Challenge['initSql']
}

self.MonacoEnvironment = {
  getWorker: function () {
    return new EditorWorker()
  }
}

const CodeViewer: FC<CodeViewerProps> = ({ initSql }) => {
  const editorRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (editorRef) {
      monaco.editor.create(editorRef.current!, {
        value: format(initSql, { language: 'sql' }),
        language: 'sql',
        theme: 'vs-dark',
        formatOnPaste: true,
        automaticLayout: true,
        fontSize: 16,
        minimap: {
          enabled: false
        }
      })
    }
  }, [editorRef])

  return (
    <div className="rounded-md border border-gray-300 p-2">
      <div ref={editorRef} style={{ height: '300px' }} />
    </div>
  )
}

export default CodeViewer
