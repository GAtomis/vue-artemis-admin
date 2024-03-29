/*
 * @Description: 路由核心 所有翻译均为机翻 勿6
 * @Author: Gavin
 * @Date: 2021-06-29 16:03:25
 * @LastEditTime: 2022-08-05 15:45:47
 * @LastEditors: Gavin
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { createGuardHook } from './permission'
import redirect from './redirect'
// import nested from './modules/nested'
// import account from './modules/account'
// import constructor from './modules/constructor'
import modules from './modules'
import type { ExpandRouteRecordRaw } from '@/model/router'

const layout = () => import('@/layout/index.vue')

//公共的路由表  Public
export const publicRouteTable: Array<ExpandRouteRecordRaw> = [
  /*  meta-api
 
             title: 'Read', // menu name
             icon: 'icon-IE',// menu icon
              hidden: true,// display yes or not
             affix: false, // tagsView fixed header
             roles: "/readme/read", //backed async router
             only:true  // no menuGroup  only page  
             sortIndex: sort
             keepAlive:true
  */

  {
    path: '/',
    name: 'Origin',
    redirect: '/Login',
    meta: {
      hidden: true,
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '欢迎登录',
      hidden: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/ErrorPage/404.vue'),
    meta: {
      title: 'error',
      hidden: true,
    },
  },
  {
    path: '/dashboard',
    component: layout,
    name: 'Dashboard',
    redirect: '/dashboard/monitoring',
    meta: {
      title: 'Dashboard',
      icon: 'icon-dashboard',
      roles: '/dashboard',
      only: true,
    },
    children: [
      {
        path: 'monitoring',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Monitoring',
        meta: {
          title: 'Dashboard',
          icon: 'icon-dashboard',
          affix: true,
          roles: '/dashboard',
        },
      },
    ],
  },
  ...redirect,
]

//按需加载路由表  Load routes according to permissions. This attribute is private
export const privateRouteTable: Array<ExpandRouteRecordRaw> = [
  // ...nested,
  // ...account,
  // ...constructor,
  ...modules,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRouteTable,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫 loading guard hook
  createGuardHook(router)
  // console.log(modules);
}

export default router
