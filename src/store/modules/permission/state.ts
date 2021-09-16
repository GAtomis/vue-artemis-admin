/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-06 16:01:08
 * @LastEditTime: 2021-09-03 11:42:50
 * @LastEditors: Gavin
 */
import { RouteRecordRaw } from 'vue-router'

export type IPermissionState = {
  routes: RouteRecordRaw[],
  addRoutes:RouteRecordRaw[],
  keepAliveComponents: string[]
}

export const state: IPermissionState = {
  routes: [],//已有路由
  addRoutes: [], //用户已有路由权限
  keepAliveComponents: []
}
