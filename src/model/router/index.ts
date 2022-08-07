/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-28 17:52:12
 * @LastEditTime: 2022-08-05 17:46:06
 * @LastEditors: Gavin
 */

import type { RouteRecordRaw } from 'vue-router'
export type ExpandRouteRecordRaw = RouteRecordRaw & {
  value?: string
  id?: number | string
  meta: {
    title?: string
    icon?: string
    roles?: string
    affix?: boolean
    only?: boolean
    sortIndex?: number
    hidden?: boolean
    keepAlive?: boolean
  }
  children?: ExpandRouteRecordRaw[]
}
