/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-06 16:01:08
 * @LastEditTime: 2021-09-06 22:27:26
 * @LastEditors: Gavin
 */
import { RouteRecordRaw } from 'vue-router'
import { IPermissionState } from './state'
import {publicRouteTable} from '@/router'

export const mutations = {
  SET_ROUTES: (state: IPermissionState, routers:RouteRecordRaw[]): void => {
    // 设置动态路由
    state.addRoutes = routers
    state.routes = [...publicRouteTable,...routers];
  },
  SET_KEEPALIVE_COMPONENTS: (state: IPermissionState, compNames): void => {
    // 设置需要缓存的组件
    state.keepAliveComponents = compNames
  },
  REMOVE_ROLES:(state: IPermissionState, val):void=>{
    state.addRoutes=val;
    state.routes=val;
  }
}
