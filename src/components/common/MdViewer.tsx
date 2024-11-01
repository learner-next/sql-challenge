import gfm from '@bytemd/plugin-gfm'
import { Viewer } from '@bytemd/react'
import highlight from '@bytemd/plugin-highlight'
import 'highlight.js/styles/default.css'
import gemoji from '@bytemd/plugin-gemoji'
import 'github-markdown-css/github-markdown-light.css'

const plugins = [gfm(), highlight(), gemoji()]

interface MdViewerProps {
  content: string
}

const MdViewer = ({ content }: MdViewerProps) => {
  return <Viewer value={content} plugins={plugins} />
}

export default MdViewer
