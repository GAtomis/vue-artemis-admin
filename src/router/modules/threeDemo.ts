
/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-01-27 12:17:27
 * @LastEditors: Gavin
 */
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue');
import { RouteRecordRaw } from 'vue-router'

const mixinRouter: Array<RouteRecordRaw> = [{
  path: '/threeDemo',
  component: Layout,
  redirect: '/threeDemo/FullBubble',
  name: 'ThreeDemo',
  meta: {
    title: 'ThreeDemo',
    icon: 'icon-CodeSandbox',
    roles: "/threeDemo",
    sortIndex:4
  },
  children: [

    {
      path: 'FullBubble',
      name: 'FullBubble',
      component: () => import('@/views/threeDemo/FullBubble.vue'),
      meta: { title: 'FullBubble',icon: 'icon-codepen',
      roles: "/threeDemo/FullBubble" }
    },
    {
      path: 'text',
      name: 'Text',
      component: () => import('@/views/threeDemo/Text.vue'),
      meta: { title: 'Text',icon: 'icon-codepen',
      roles: "/threeDemo/text" }
    }

  ]
}
]

export default mixinRouter
