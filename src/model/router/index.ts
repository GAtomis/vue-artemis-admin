/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-28 17:52:12
 * @LastEditTime: 2022-07-28 19:19:25
 * @LastEditors: Gavin
 */

import type { RouteRecordRaw } from 'vue-router'
export type ExpandRouteRecordRaw = RouteRecordRaw & {
  value?: string
  meta: {
    title?: string
    icon?: string
    roles?: string
    affix?: boolean
    only?: boolean
    sortIndex?: number
  }
  children?: ExpandRouteRecordRaw[]
}
