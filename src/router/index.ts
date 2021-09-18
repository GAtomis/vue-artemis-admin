/*
 * @Description: 路由核心 所有翻译均为机翻 勿6
 * @Author: Gavin
 * @Date: 2021-06-29 16:03:25
 * @LastEditTime: 2021-09-18 14:12:37
 * @LastEditors: Gavin
 */


import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createGuardHook } from './permission'
import redirect from './modules/redirect'
import nested from './modules/nested'



const layout = () => import('@/layout/index.vue');

//公共的路由表  Public 
export const publicRouteTable: Array<RouteRecordRaw> = [



  {

    path: '/',
    name: 'Origin',
    redirect: '/Login',
    meta: {
      hidden: true
    }


  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '首页', hidden: true
    },

  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/ErrorPage/404.vue'),
    meta: {
      title: 'error', hidden: true
    },

  },
  {
    path: '/dashboard',
    component: layout,
    name: 'Dashboard',
    redirect: '/dashboard/monitoring',
    meta: { title: 'Dashboard', icon: 'icon-alibaba', roles: "/dashboard" },
    children: [
      {
        path: 'monitoring',
        component: () => import('@/views/dashboard/Monitoring.vue'),
        name: 'Monitoring',
        meta: { title: 'monitoring', icon: 'icon-taobao' , affix: true ,roles: "/dashboard" }
      }
    ],

  },
  ...redirect,




]



//按需加载路由表  Load routes according to permissions. This attribute is private
export const privateRouteTable: Array<RouteRecordRaw> = [
  {
    path: '/readme',
    component: layout,
    redirect: '/readme/read',
    name: 'Readme',
    meta: { title: 'Readme', icon: 'icon-HTML', roles: "/readme", affix: true },
    children: [
      {
        path: 'read',
        component: () => import('@/views/readme/Readme.vue'),
        name: 'Read',
        meta: { title: 'Read', icon: 'icon-IE', affix: false, roles: "/readme/read" }
      },
      {
        path: 'me',
        component: () => import('@/views/readme/Readme.vue'),
        name: 'Me',
        meta: { title: 'Me', icon: 'icon-google', affix: false, roles: "/readme/me" }
      }
    ],
  },
  {
    path: '/error',
    component: layout,
    redirect: '/error/404',
    name: 'ErrorPage',
    meta: { title: 'ErrorPage', icon: 'icon-disconnect', roles: "/error", affix: true },
    children: [
      {
        path: '404',
        component: () => import('@/views/ErrorPage/404.vue'),
        name: '404',
        meta: { title: '404', icon: 'icon-error', affix: false, roles: "/error/404"}
      },
      {
        path: '500',
        component: () => import('@/views/ErrorPage/500.vue'),
        name: '500',
        meta: { title: '500', icon: 'icon-error', affix: false, roles: "/error/500"}
      }
    ],
  },
  ...nested 





]



const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRouteTable
})


export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫 loading guard hook
  createGuardHook(router)
}





export default router