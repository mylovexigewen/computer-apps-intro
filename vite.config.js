import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/computer-apps-intro/', // 添加这一行，使用您的仓库名称
  plugins: [vue()]
}) 