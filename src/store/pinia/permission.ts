/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-31 11:13:13
 * @LastEditTime: 2022-01-04 12:44:07
 * @LastEditors: Gavin
 */
import { RouteRecordRaw } from 'vue-router'
import { privateRouteTable, publicRouteTable } from '@/router'
import { filterAsyncRoutes} from '@/hooks/router'
import { toRaw } from 'vue'

export type IPermissionState = {
  routes: RouteRecordRaw[],
  addRoutes: RouteRecordRaw[],
  keepAliveComponents: string[]
}

import { defineStore } from 'pinia'
export default defineStore({
  id: 'permission',
  state: (): IPermissionState => ({
    routes: [],//已有路由
    addRoutes: [], //用户已有路由权限
    keepAliveComponents: []
  }),
  getters: {

    roles: state => state.addRoutes
  },
  actions: {

    async generateRoutes(roles: Array<string>) {

      return new Promise<RouteRecordRaw[]>(resolve => {
        // 可访问的路由变量
        let accessedRoutes: RouteRecordRaw[];
        // roles的速度的
        if (roles.includes("admin")) {
          // 异步全局路由
          accessedRoutes = privateRouteTable || [];
        } else {
          // 筛选路由
          accessedRoutes = filterAsyncRoutes(privateRouteTable, roles);
        }
        // 设置路由
        this.addRoutes = accessedRoutes
        this.routes = [...publicRouteTable, ...accessedRoutes];
        // 返回设置路由
        resolve(accessedRoutes);
      });
      // 动态获取菜单

      // commit('setRouters', routers)
      // return routers
    },
    resetRoles() {
      return new Promise(resolve => {
        resolve(toRaw(this.addRoutes))
        this.addRoutes = [];
        this.routes = [];

      })
    }
  }
})