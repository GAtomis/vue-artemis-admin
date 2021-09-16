/*
 * @Description: state定义
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-09-16 17:42:45
 * @LastEditors: Gavin
 */
// import { createStorage } from '@/utils/Storage'
// import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'
// const Storage = createStorage({ storage: localStorage })


import {RouteRecordRaw } from 'vue-router'

export type VisitedViews={
  meta?: any,
  name: string,
  path: string,

}
export type ITagsViewState = {
  visitedViews: Array<VisitedViews>,
  cachedViews:  Array<RouteRecordRaw>,
  isShow:boolean,
  activeColor?:''
}

export const state: ITagsViewState = {
  visitedViews:[],
  cachedViews:[],
  isShow:true
}
