/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-06 16:01:08
 * @LastEditTime: 2021-09-07 16:38:39
 * @LastEditors: Gavin
 */


import { IPermissionState } from './state'
import { ActionContext } from 'vuex'
import { IStore } from '@/store/types'
import {privateRouteTable} from '@/router'
import {filterAsyncRoutes,resetRoute} from '@/hooks/router'
import {RouteRecordRaw} from 'vue-router'

import {toRaw} from 'vue'




export const actions = {
  async generateRoutes({ commit}:ActionContext<IPermissionState, IStore>,roles:Array<string>) {

    return new Promise(resolve => {
      // 可访问的路由变量
      let accessedRoutes:RouteRecordRaw[] ;
      // roles的速度的
      if (roles.includes("admin")) {
          // 异步全局路由
          accessedRoutes = privateRouteTable || [];
      } else {
          // 筛选路由
          accessedRoutes = filterAsyncRoutes(privateRouteTable, roles);
      }
      // 设置路由
      commit("SET_ROUTES", accessedRoutes);
      // 返回设置路由
      resolve(accessedRoutes);
  });
    // 动态获取菜单

    // commit('setRouters', routers)
    // return routers
  },
  resetRoles({ commit,state }:ActionContext<IPermissionState, IStore>){
    return new Promise(resolve=>{
 
      resolve(toRaw(state.addRoutes))
      commit('REMOVE_ROLES',[])
      

    })
  }
}
