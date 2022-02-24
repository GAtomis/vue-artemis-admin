/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-24 18:53:56
 * @LastEditTime: 2022-01-24 18:59:35
 * @LastEditors: Gavin
 */

import { RouteRecordRaw } from 'vue-router'
export type RouterItem = RouteRecordRaw & {
  meta: {
    title: 'Account'
    icon: 'icon-team'
    roles: '/account'
    affix: boolean
    only: boolean
    sortIndex: number
  }
}
