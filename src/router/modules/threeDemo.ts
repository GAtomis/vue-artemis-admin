
/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-01-24 18:20:38
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue');
import { RouteRecordRaw } from 'vue-router'

const mixinRouter: Array<RouteRecordRaw> = [{
  path: '/threeDemo',
  component: Layout,
  redirect: '/threeDemo/index',
  name: 'ThreeDemo',
  meta: {
    title: 'ThreeDemo',
    icon: 'icon-team',
    roles: "/threeDemo",
    sortIndex:4
  },
  children: [

    {
      path: 'index',
      name: 'ThreeDemoIndex',
      component: () => import('@/views/threeDemo/index.vue'),
      meta: { title: 'Demo',icon: 'icon-user',
      roles: "/threeDemo/index" }
    }

  ]
}
]

export default mixinRouter
