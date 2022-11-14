/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-27 11:50:29
 * @LastEditTime: 2022-11-14 20:28:15
 * @LastEditors: Gavin 850680822@qq.com
 */

const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/readme',
    component: Layout,
    redirect: '/readme/read',
    name: 'Readme',
    meta: {
      title: 'About',
      icon: 'icon-read',
      roles: '/readme',
      affix: false,
      sortIndex: 999,
    },
    children: [
      {
        path: 'read',
        component: () => import('@/views/readme/Readme.vue'),
        name: 'Read',
        meta: {
          title: 'Read',
          icon: 'icon-IE',
          affix: false,
          roles: '/readme/read',
        },
      },
      {
        path: 'me',
        component: () => import('@/views/readme/Readme.vue'),
        name: 'Me',
        meta: {
          title: 'Me',
          icon: 'icon-google',
          affix: false,
          roles: '/readme/me',
        },
      },
    ],
  },
]

export default mixinRouter
