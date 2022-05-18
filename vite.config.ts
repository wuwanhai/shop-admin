import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from "path";

export default defineConfig({
    server: {
        proxy: {
            // 字符串简写写法
            // '/foo': 'http://localhost:4567',
            // 选项写法
            // '/api': {
            //     target: 'http://jsonplaceholder.typicode.com',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/api/, '')
            // },
            // 正则表达式写法
            // '^/fallback/.*': {
            //     target: 'http://jsonplaceholder.typicode.com',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/fallback/, '')
            // },
            // 使用 proxy 实例
            // 要使 target 生效 ，应注释掉 baseUrl 的测试
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                // configure: (proxy, options) => {
                    // proxy 是 'http-proxy' 的实例
                // }
            },
            // Proxying websockets or socket.io
            // '/socket.io': {
            //     target: 'ws://localhost:3000',
            //     ws: true
            // }
        }
    },
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
