
/*
 * @Description: 构造器
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2021-11-30 18:45:07
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue');
import { RouteRecordRaw } from 'vue-router'

const mixinRouter: Array<RouteRecordRaw> = [{
  path: '/constructor',
  component: Layout,
  redirect: '/constructor/index',
  name: 'Constructor',
  meta: {
    title: 'Constructor',
    icon: 'icon-team',
    roles: "/constructor",
    only: true
  },
  children: [
    {
      path: 'index',
      name: 'FormItem',
      component: () => import('@/views/constructor/index.vue'),
      meta: {
        title: 'Constructor', 
        icon: 'icon-build',
        roles: "/constructor/index"
      }
    }

  ]
}
]

export default mixinRouter