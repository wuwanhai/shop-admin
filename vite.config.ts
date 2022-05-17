import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx({
    // 配置 TSX 支持
    // options are passed on to @vue/babel-plugin-jsx
  })]
})
