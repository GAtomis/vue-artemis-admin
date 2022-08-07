/*
 * @Description: 构造器
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-08-05 15:52:45
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/constructor',
    component: Layout,
    redirect: '/constructor/index',
    name: 'Constructor',
    meta: {
      title: 'Constructor',
      icon: 'icon-team',
      roles: '/constructor',
      only: true,
      sortIndex: 2,
      hidden: true,
    },
    children: [
      {
        path: 'index',
        name: 'FormItem',
        component: () => import('@/views/constructor/index.vue'),
        meta: {
          title: 'Constructor',
          icon: 'icon-build',
          roles: '/constructor/index',
        },
      },
    ],
  },
]

export default mixinRouter
