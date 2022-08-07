/*
 * @Description: table
 * @Author: Gavin
 * @Date: 2022-05-13 15:30:28
 * @LastEditTime: 2022-08-05 15:54:38
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
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
