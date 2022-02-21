/*
 * @Description: vite配置
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2022-02-21 18:26:04
 * @LastEditors: Gavin
 */
import { UserConfig, ConfigEnv,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import eruda from 'vite-plugin-eruda'//调试工具
import viteImagemin from 'vite-plugin-imagemin';//图片压缩
import viteCompression from 'vite-plugin-compression';//包压缩支持Gzip
import { viteMockServe } from 'vite-plugin-mock'//mock

import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import vueJsx from '@vitejs/plugin-vue-jsx'//jsx插件

import themePreprocessorPlugin from "@zougt/vite-plugin-theme-preprocessor";

// import Components from 'unplugin-vue-components/vite'



// import compress from 'vite-plugin-compress'
// function pathResolve(dir: string) {
//   return resolve(process.cwd(), '.', dir);
// }
// https://vitejs.dev/config/
const setTheme = () => themePreprocessorPlugin({
  less: {
    // // 启用任意主题色模式
    arbitraryMode: false,
    // // 默认的主题色，用于对其他颜色值形成对比值，通常与 src/theme/theme-vars.less 中的一个主题色相同，也可以不相同，就看是不是你想要的效果
    // defaultPrimaryColor: "#18ffb2",
    // 各个主题文件的位置
    multipleScopeVars: [
      {
        scopeName: "theme-default",
        path: resolve("src/themes/default.less"),
      },
      {
        scopeName: "theme-dark",
        path: resolve("src/themes/dark.less"),
      },

    ],
    // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
    includeStyleWithColors: [
      {

        color: '#ffffff'
      }
    ],
    defaultScopeName:'theme-default',
    extract:false


  },
})


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
//set CDN 

function configCDN() {
  
  return importToCDN({
    modules: [
      {
        name: 'three',
        var: 'three',
        path: 'https://elc-corp-global.oss-cn-shanghai.aliyuncs.com/da/three.min.js'
      }

    ]
  })

}





export default ({ command, mode }: ConfigEnv): UserConfig => {

  const env = loadEnv(mode, __dirname)


  return {
    base:'./',//绝对路径配置根据ngxin
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
      port:+env.VITE_PORT,
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
    plugins: [vue(), vueJsx()
      , viteCompression({ deleteOriginFile: true }),

  

      , imagemin(), viteMockServe({ supportTs: true }), setTheme(), configCDN()]
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
