/* eslint-disable @typescript-eslint/no-explicit-any */
import * as monaco from 'monaco-editor'
// import { format } from "sql-formatter";
import { loader } from '@monaco-editor/react'
import { useRef } from 'react'
import Editor from '@monaco-editor/react'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

self.MonacoEnvironment = {
  getWorker() {
    return new editorWorker()
  }
}
loader.config({ monaco })

const SqlEditor = ({ content }: { content: string }) => {
  const monacoRef = useRef<typeof monaco | null>(null)

  function handleEditorWillMount(monaco: any) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true)
  }

  function handleEditorDidMount(monaco: any) {
    monacoRef.current = monaco
    // monacoRef.current = editor.create()
  }

  function handleEditorChange(value: string | undefined) {
    if (value) {
      // const formatted = format(value);
      // monacoRef.current?.editor.setModelLanguage(event, 'sql');
      // monacoRef.current?.editor.setValue(value);
    }
  }

  return (
    <Editor
      height={500}
      defaultLanguage="sql"
      defaultValue={content}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
    />
  )
}

export default SqlEditor
