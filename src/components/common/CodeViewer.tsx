import type { Challenge } from '@/type'
import * as monaco from 'monaco-editor'
import { FC, useRef, useEffect, useState } from 'react'
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
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null)
  useEffect(() => {
    if (editorRef) {
      setEditor(editor => {
        if (editor) return editor

        return monaco.editor.create(editorRef.current!, {
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
      })
    }
    return () => editor?.dispose()
  }, [editorRef, initSql, editor])

  return (
    <div className="rounded-md border border-gray-300 p-2">
      <div ref={editorRef} style={{ height: '300px' }} />
    </div>
  )
}

export default CodeViewer
