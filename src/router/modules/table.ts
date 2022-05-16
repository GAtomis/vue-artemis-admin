/*
 * @Description: table
 * @Author: Gavin
 * @Date: 2022-05-13 15:30:28
 * @LastEditTime: 2022-05-16 12:17:45
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
      icon: 'icon-table',
      roles: '/table',
      sortIndex: 3,
    },
    children: [
      {
        path: 'general',
        name: 'GeneralTable',
        component: () => import('@/views/table/general.vue'),
        meta: {
          title: 'General',
          icon: 'icon-filesearch',
          roles: '/table/general',
          keepAlive: true,
        },
      },
    ],
  },
]

export default mixinRouter
