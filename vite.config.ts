import { defineConfig } from 'abell'

// https://vitejs.dev/config/
export default defineConfig({
  abell: {
    esbuild: {
      loader: 'tsx',
    },
  },
})
