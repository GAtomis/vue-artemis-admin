/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2022-11-14 19:33:16
 * @LastEditors: Gavin 850680822@qq.com
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less'
// import { setupStore } from '@/store'
import router, { setupRouter } from './router'
import { registerIconComponents } from '@/components/Iconfont/Iconfont'
import Antd from 'ant-design-vue'
import pinia from '@/store/pinia/index'

const app = createApp(App)


// use Antdv
app.use(Antd)
//use icon
app.use(registerIconComponents)

// setupStore(app)
//  vue router
setupRouter(app)
//init pinia
app.use(pinia)


router.isReady().then(() => app.mount('#app'))

// console.log(process.env.NODE_ENV === 'development');
