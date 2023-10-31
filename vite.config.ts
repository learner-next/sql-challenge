import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { CodeInspectorPlugin } from 'code-inspector-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    CodeInspectorPlugin({
      bundler: 'vite'
    })
  ],
  esbuild: {
    drop: ['console', 'debugger']
  },
  build: {
    sourcemap: true
  }
})
