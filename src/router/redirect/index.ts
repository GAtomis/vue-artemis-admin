/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-05 19:11:51
 * @LastEditTime: 2022-08-05 11:51:36
 * @LastEditors: Gavin
 */

import { ExpandRouteRecordRaw } from '@/model/router'
import { RouterTransition } from '@/components/transition'

const routes: Array<ExpandRouteRecordRaw> = [
  {
    path: '/redirect/:path*',
    name: 'Redirect',
    component: RouterTransition,
    meta: {
      title: '重定向',
      icon: 'SettingOutlined',
      hidden: true,
    },
    children: [
      {
        path: '',
        name: 'RedirectChirden',
        component: () => import('@/views/redirect/index.vue'),
        meta: {
          title: '重定向',
          hidden: true,
          keepAlive: false,
        },
      },
    ],
  },
]

export default routes
