/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-31 11:13:13
 * @LastEditTime: 2022-08-05 17:35:59
 * @LastEditors: Gavin
 */
import type { ExpandRouteRecordRaw } from '@/model/router'
import type { Permission } from '@/model/account'
import { privateRouteTable, publicRouteTable } from '@/router'
import { filterAsyncRoutesByMeun } from '@/hooks/router'
import { toRaw } from 'vue'
import { getListByRoleId } from '@/api/account/menu'

export type IPermissionState = {
  routes: ExpandRouteRecordRaw[]
  addRoutes: ExpandRouteRecordRaw[]
  keepAliveComponents: string[]
}

import { defineStore } from 'pinia'
export default defineStore({
  id: 'permission',
  state: (): IPermissionState => ({
    routes: [], //已有路由
    addRoutes: [], //用户已有路由权限
    keepAliveComponents: [],
  }),
  getters: {
    roles: (state) => state.addRoutes,
  },
  actions: {
    async generateRoutes(roles: Permission[]) {
      return new Promise<ExpandRouteRecordRaw[]>((resolve) => {
        // 可访问的路由变量
        let accessedRoutes: ExpandRouteRecordRaw[]
        // roles的速度的
        if (false) {
          //如果需要管理员权限开启

          // 异步全局路由
          accessedRoutes = privateRouteTable || []
        } else {
          // 筛选路由
          accessedRoutes = filterAsyncRoutesByMeun<Permission[]>(
            privateRouteTable,
            roles,
            (roles, route) => {
              return roles.some((item) => item.url === route.meta.roles)
            }
          )
        }
        // 设置路由
        this.addRoutes = accessedRoutes
        this.routes = [...publicRouteTable, ...accessedRoutes]
        // 返回设置路由
        resolve(accessedRoutes)
      })
      // 动态获取菜单

      // commit('setRouters', routers)
      // return routers
    },

    resetRoles() {
      return new Promise((resolve) => {
        resolve(toRaw(this.addRoutes))
        this.addRoutes = []
        this.routes = []
      })
    },
    getPermission() {
      return getListByRoleId
    },
  },
})
