import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      hooks: "/src/hooks",
      pages: "/src/pages",
      stylesheets: "/src/stylesheets",
      utils: "/src/utils",
    },
  },
})
