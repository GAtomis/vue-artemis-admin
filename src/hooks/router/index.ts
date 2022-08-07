/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-06 10:00:31
 * @LastEditTime: 2022-08-07 12:12:20
 * @LastEditors: Gavin
 */

import { privateRouteTable as asyncRoutes } from '@/router/index'
import type { ExpandRouteRecordRaw } from '@/model/router'
import _ from 'lodash'

import router from '@/router/index'

/**
 * @description: 是否有权限
 * @param {Array} roles
 * @param {ExpandRouteRecordRaw} route
 * @param {string} key
 * @return {boolean}
 * @Date: 2021-08-08 09:36:00
 */
function hasPermission(
  roles: Array<string>,
  route: ExpandRouteRecordRaw | any,
  key = 'roles'
): boolean {
  // 在路由筛选中命中的策略统一策略
  const routerStrategy = {
    /**
     * @description: 筛选隐藏策略方法
     * @param {any} value
     * @return {*}
     * @Date: 2021-08-08 09:59:57
     */
    hidden(route: any, roles?: any): boolean {
      // console.log(route, )

      return !route?.meta?.hidden
    },

    /**
     * @description: 筛选权限
     * @param {any} route
     * @param {any} roles
     * @return {*}
     * @Date: 2021-09-01 15:13:03
     */
    roles(route: ExpandRouteRecordRaw, roles: any): boolean {
      return roles.some((role) => route.meta.roles === role)
    },
    affix(route: ExpandRouteRecordRaw) {
      // console.log('每次图钉路由', route, route?.meta?.affix)

      return route?.meta?.affix
    },
  }
  // meta并且有roles进行判断
  if (route?.meta) {
    // 服务器请求返回获得的规则数组，去做数组遍历判断，每个路由的meta.roles字符串或者数组去做包含判断
    // return roles.some(role => route.meta.roles.includes(role));
    return routerStrategy?.[key](route, roles) ?? false
  } else {
    // 没有meta的路由直接显示
    return true
  }
}

/**
 * 递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles 包含路径的集合 重点！！！
 */
export function filterAsyncRoutes(
  routes: Array<ExpandRouteRecordRaw> = asyncRoutes,
  roles: Array<string>,
  key?: string
): Array<ExpandRouteRecordRaw> {
  // 关键筛选  第一个参数所有拥有的所有路由权限，第二参数权限路由
  // res是筛选完的路由
  const res: Array<ExpandRouteRecordRaw> = []
  // 所有异步路由遍历
  routes.forEach((route) => {
    // 解构
    const tmp = { ...route }
    // 当前路由组是否包含roles
    if (hasPermission(roles, tmp, key)) {
      // 是否存在子路由
      if (tmp?.children) {
        // 在进行判断;
        tmp.children = filterAsyncRoutes(tmp.children, roles, key)
      }
      // 如果有权限当前路由加入数组
      // console.error(tmp);

      res.push(tmp)
    }
  })

  return res
}

/**
 * 筛选子路由数据
 * @param routes asyncRoutes
 * @param roles
 */
export function filterChildren(
  routes: Array<ExpandRouteRecordRaw>,
  roles: Array<string>,
  key?: string
): Array<ExpandRouteRecordRaw> {
  // 关键筛选  第一个参数所有拥有的所有路由权限，第二参数权限路由
  // res是筛选完的路由
  let res: Array<ExpandRouteRecordRaw> = []
  // 所有异步路由遍历
  routes.forEach((route) => {
    // 解构
    const tmp = { ...route }
    let result
    // 当前路由组是否包含roles
    if (tmp.children) {
      result = filterChildren(tmp.children, roles, key)
      res = [...res, ...result]
    } else {
      if (hasPermission(roles, tmp, key)) {
        res.push(tmp)
      }
    }
  })

  return res
}

/**
 * @description: deep遍历路由
 * @param routerMap 路由树
 * @param cb 每次路由遍历回调
 * @return {*}
 * @Date: 2022-07-28 19:25:05
 */
export function deepRouteMap(
  routerMap: Array<ExpandRouteRecordRaw>,
  cb: (r: ExpandRouteRecordRaw) => void
): ExpandRouteRecordRaw[] {
  routerMap.forEach((route) => {
    if (route?.children?.length) {
      deepRouteMap(route.children, cb)
    }
    cb(route)
  })
  return routerMap
}

/**
 * @description: 重载路由
 * @param {Array} list 重载路由列表
 * @return {*}
 * @Date: 2022-07-28 19:27:30
 */
export function resetRoute(list: Array<ExpandRouteRecordRaw>): void {
  list.forEach((item) => {
    router.addRoute(item.name as string, item)
  })
}

/**
 * @description: 树形菜单生成
 * @param routes 当前本地的路由表
 * @param source 过滤的条件
 * @泛型  T 需要过滤的数据
 * @return {*}
 * @Date: 2022-08-07 12:02:31
 */
export function filterAsyncRoutesByMeun<T = any[]>(
  routes = _.cloneDeep(asyncRoutes),
  source: T,
  cb: (a: T, b: ExpandRouteRecordRaw) => boolean
): Array<ExpandRouteRecordRaw> {
  // 关键筛选  第一个参数所有拥有的所有路由权限，第二参数权限路由
  // res是筛选完的路由
  const res: Array<ExpandRouteRecordRaw> = []

  const isPass = function <T>(
    roles: T,
    route: ExpandRouteRecordRaw,
    cb: (a: T, b: ExpandRouteRecordRaw) => boolean
  ): boolean {
    // meta并且有roles进行判断
    if (route?.meta) {
      // 服务器请求返回获得的规则数组，去做数组遍历判断，每个路由的meta.roles字符串或者数组去做包含判断
      // return roles.some(role => route.meta.roles.includes(role));
      return cb(roles, route)
    } else {
      // 没有meta的路由直接显示
      return true
    }
  }

  // 所有异步路由遍历
  routes.forEach((route) => {
    // 解构
    const tmp = { ...route }
    // 当前路由组是否包含roles
    if (isPass<T>(source, tmp, cb)) {
      // 是否存在子路由
      if (tmp?.children) {
        // 在进行判断;
        tmp.children = filterAsyncRoutesByMeun<T>(tmp.children, source, cb)
      }
      // 如果有权限当前路由加入数组
      // console.error(tmp);

      res.push(tmp)
    }
  })

  return res
}
