/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-08-07 10:08:08
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
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
        path: 'roles',
        name: 'Roles',
        component: () => import('@/views/account/roles/index.vue'),
        meta: {
          title: 'Roles',
          icon: 'icon-switchuser',
          roles: '/account/roles',
        },
      },
      {
        path: 'editRole',
        name: 'EditRole',
        component: () => import('@/views/account/editRole/index.vue'),
        meta: {
          title: 'EditRole',
          icon: 'icon-switchuser',
          roles: '/account/editRole',
          hidden: true,
        },
      },
      {
        path: 'permissons',
        name: 'Permissons',
        component: () => import('@/views/account/permissons/index.vue'),
        meta: {
          title: 'Permissons',
          icon: 'icon-switchuser',
          roles: '/account/permissons',
          hidden: false,
        },
      },
    ],
  },
]

export default mixinRouter
