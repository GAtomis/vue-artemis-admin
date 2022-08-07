/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-27 11:50:29
 * @LastEditTime: 2022-08-05 15:53:15
 * @LastEditors: Gavin
 */

const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/error',
    component: Layout,
    redirect: '/error/404',
    name: 'ErrorPage',
    meta: {
      title: 'ErrorPage',
      icon: 'icon-disconnect',
      roles: '/error',
      sortIndex: 998,
    },
    children: [
      {
        path: '404',
        component: () => import('@/views/ErrorPage/404.vue'),
        name: '404',
        meta: {
          title: '404',
          icon: 'icon-error',
          affix: false,
          roles: '/error/404',
        },
      },
      {
        path: '500',
        component: () => import('@/views/ErrorPage/500.vue'),
        name: '500',
        meta: {
          title: '500',
          icon: 'icon-error',
          affix: false,
          roles: '/error/500',
        },
      },
    ],
  },
]

export default mixinRouter
