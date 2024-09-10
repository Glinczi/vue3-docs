import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vant 自动引入相关包
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// 自动导入API
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 设置为在'src/'目录下生成解决ts报错，默认是当前目录('./'，即根目录)
      dts: 'src/types/auto-import.d.ts',
      // 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
      eslintrc: {
        enabled: true
      }
    }),
    Unocss()
  ]
})
