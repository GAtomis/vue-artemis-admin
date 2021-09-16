/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-06 16:01:08
 * @LastEditTime: 2021-09-06 16:47:27
 * @LastEditors: Gavin
 */
import { IPermissionState } from './state'
import { RouteRecordRaw } from 'vue-router'

export const getters = {
  roles(state: IPermissionState): RouteRecordRaw[] {
    return state.addRoutes
  },
  routes(state: IPermissionState): RouteRecordRaw[] {
    return state.routes
  },

 
}
