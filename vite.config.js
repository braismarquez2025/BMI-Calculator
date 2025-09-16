import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/BMI-Calculator/',
  server: {
    watch: {
      usePolling: true
    },
    host: true
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/abstracts/_variables.scss";
                         @import "@/assets/sass/abstracts/_mixins.scss";`
      }
    }
  }
})
