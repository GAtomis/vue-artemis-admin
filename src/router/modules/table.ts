/*
 * @Description: table
 * @Author: Gavin
 * @Date: 2022-05-13 15:30:28
 * @LastEditTime: 2022-05-13 15:34:19
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { RouteRecordRaw } from 'vue-router'

const mixinRouter: Array<RouteRecordRaw> = [
  {
    path: '/table',
    component: Layout,
    redirect: '/table/general',
    name: 'Table',
    meta: {
      title: 'Table',
      icon: 'icon-team',
      roles: '/table',
      sortIndex: 3,
    },
    children: [
      {
        path: 'general',
        name: 'GeneralTable',
        component: () => import('@/views/table/general-form.vue'),
        meta: { title: 'Center', icon: 'icon-user', roles: '/table/general' },
      },
    ],
  },
]

export default mixinRouter
