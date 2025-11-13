import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    server: {
        proxy: {
            '/api': {
                target: 'https://web.biggerlens.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    //打包配置
    build: {
        target: 'esnext',
        chunkSizeWarningLimit: 1000,
        cssCodeSplit: true, // 启用 CSS 代码分割
        sourcemap: false, // 生产环境不生成 sourcemap
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // 移除 console
                drop_debugger: true // 移除 debugger
            }
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    // 将 Vue 全家桶打包在一起
                    'vue-vendor': ['vue', 'vue-router', 'pinia']

                    // 编辑器相关
                },
                // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
                entryFileNames: 'js/[name].[hash].js',
                // 用于命名代码拆分时创建的共享块的输出命名
                chunkFileNames: 'js/[name].[hash].js',
                // 用于输出静态资源的命名，[ext]表示文件扩展名
                assetFileNames: '[ext]/[name].[hash].[ext]'
            }
        }
    },
    esbuild: {
        target: 'esnext' // 或者至少 'es2022'
    },
    optimizeDeps: {
        include: ['vue', 'vue-router', 'pinia', 'axios', 'element-plus']
    }
})
