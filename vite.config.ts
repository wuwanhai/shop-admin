import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from "path";

export default defineConfig({
  plugins: [
      vue(),
      vueJsx({
  })],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/variable.scss";`
            }
        }
        },
    resolve: {
    alias: {
      '@': path.join(__dirname,'src')
    }
  }
})
