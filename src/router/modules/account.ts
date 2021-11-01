
/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2021-10-26 13:20:56
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue');
import { RouteRecordRaw } from 'vue-router'

const mixinRouter: Array<RouteRecordRaw> = [{
  path: '/account',
  component: Layout,
  redirect: '/account/settings',
  name: 'Account',
  meta: {
    title: 'Account',
    icon: 'icon-team',
    roles: "/account"
  },
  children: [

    {
      path: '/account/center',
      name: 'Center',
      component: () => import('@/views/account/center/index.vue'),
      meta: { title: 'Center',icon: 'icon-user',
      roles: "/account/center" }
    },
    {
      path: '/account/settings',
      name: 'Settings',
      component: () => import('@/views/account/settings/index.vue'),
      meta: { title: 'Settings',icon: 'icon-switchuser',
      roles: "/account/settings" }
    }
  ]
}
]

export default mixinRouter
