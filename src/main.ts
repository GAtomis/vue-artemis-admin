/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2021-08-09 14:22:59
 * @LastEditors: Gavin
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import { setupStore } from '@/store'
import router, { setupRouter } from './router'
import {registerIconComponents} from '@/components/Iconfont/Iconfont'
import Antd from 'ant-design-vue';




const app = createApp(App);
// app?.config?.productionTip?? = false;



console.log(app.config);
//挂在Antd
app.use(Antd);
//注册icon组件
app.use(registerIconComponents)
//状态管理工具挂在
setupStore(app)
// 挂载路由
setupRouter(app)
// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))



// console.log(process.env.NODE_ENV === 'development');
