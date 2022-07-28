/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-07-28 11:56:12
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { RouteRecordRaw } from 'vue-router'

const mixinRouter: Array<RouteRecordRaw> = [
  {
    path: '/account',
    component: Layout,
    redirect: '/account/settings',
    name: 'Account',
    meta: {
      title: 'Account',
      icon: 'icon-team',
      roles: '/account',
      sortIndex: 2,
    },
    children: [
      {
        path: 'center',
        name: 'Center',
        component: () => import('@/views/account/center/index.vue'),
        meta: { title: 'Center', icon: 'icon-user', roles: '/account/center' },
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/account/settings/index.vue'),
        meta: {
          title: 'Settings',
          icon: 'icon-switchuser',
          roles: '/account/settings',
        },
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/account/menu/index.vue'),
        meta: {
          title: 'Menu',
          icon: 'icon-switchuser',
          roles: '/account/menu',
        },
      },
    ],
  },
]

export default mixinRouter
