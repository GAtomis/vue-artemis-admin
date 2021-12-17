/*
 * @Description: vite配置
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2021-12-17 16:29:23
 * @LastEditors: Gavin
 */
import { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import eruda from 'vite-plugin-eruda'//调试工具
import viteImagemin from 'vite-plugin-imagemin';//图片压缩
import viteCompression from 'vite-plugin-compression';//包压缩支持Gzip
import { viteMockServe } from 'vite-plugin-mock'//mock

import vueJsx from '@vitejs/plugin-vue-jsx'//jsx插件


// import compress from 'vite-plugin-compress'

// function pathResolve(dir: string) {
//   return resolve(process.cwd(), '.', dir);
// }

// https://vitejs.dev/config/

const imagemin = () => {
  return viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    mozjpeg: {
      quality: 20,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  })
}


export default ({ command, mode }: ConfigEnv): UserConfig => {


  return {
    // base:'./',//绝对路径配置根据ngxin
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src')
        }
      ]
    },
    server: {
      host: '0.0.0.0',
      open: true,
      proxy: {

        '/api/repos': {
          target: 'https://api.github.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true
        },
        scss: {
          additionalData: `
          @use 'sass:math';
          @import "src/styles/global.scss";
          `
        }
      }
    },
    plugins: [vue(), vueJsx(), viteCompression({ deleteOriginFile: true }), imagemin(), viteMockServe({ supportTs: true })]
  }

}

// export default defineConfig({
//   resolve: {
//     alias: [
//       {
//         find: '@',
//         replacement: resolve(__dirname, './src')
//       }
//     ]
//   },
//   server: {
//     host: '0.0.0.0'
//   },
//   plugins: [vue(), imagemin(), viteCompression({ deleteOriginFile: true }), viteMockServe({
//     // default
//     mockPath: 'mock',
//     localEnabled: command === 'serve',
//   }), eruda()]
// })
