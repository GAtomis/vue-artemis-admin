/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-08-05 15:53:56
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const nestedRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
      title: 'Nested Routes',
      icon: 'icon-apartment',
      roles: '/nested',
      sortIndex: 2,
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/Menu1.vue'), // Parent router-view
        name: 'Menu1',
        meta: {
          title: 'Menu 1',
          icon: 'icon-apartment',
          roles: '/nested/menu1',
        },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/Menu1-1.vue'),
            name: 'Menu1-1',
            meta: {
              title: 'Menu1-1',
              icon: 'icon-apartment',
              roles: '/nested/menu1/menu1-1',
              hidden: false,
            },
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-1/Menu1-1.vue'),
            name: 'Menu1-2',
            meta: {
              title: 'Menu1-2',
              icon: 'icon-apartment',
              roles: '/nested/menu1/menu1-2',
              // hidden: !false,
            },
          },
        ],
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/nested/menu2/Menu2.vue'),
        meta: {
          title: 'Menu 2',
          icon: 'icon-apartment',
          roles: '/nested/menu2',
        },
      },
    ],
  },
]

export default nestedRouter
