/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-31 12:23:51
 * @LastEditTime: 2022-08-05 15:56:49
 * @LastEditors: Gavin
 */

import { RouteRecordName, RouteLocationNormalizedLoaded } from 'vue-router'

import { ExpandRouteRecordRaw } from '@/model/router'
import { TAGS_VIEW_IS_SHOW } from '@/store/store-enum'
import { createStorage } from '@/utils/storage'
import { defineStore } from 'pinia'
import { SETTINGS_IS_SHOW } from '@/settings'
const Storage = createStorage({ storage: localStorage })
export type VisitedViews = {
  meta?: any
  name: RouteRecordName | undefined
  path: string
}
export type ITagsViewState = {
  visitedViews: Array<VisitedViews>
  cachedViews: Array<ExpandRouteRecordRaw>
  isShow: boolean
  activeColor?: ''
}

function commit<T>(title: string, val: T): T {
  const ex = 7 * 24 * 60 * 60 * 1000 //过期时间
  Storage.set(title, val, ex)
  return val
}

export default defineStore({
  id: 'tagsView',
  state: (): ITagsViewState => ({
    visitedViews: [],
    cachedViews: [],
    isShow: SETTINGS_IS_SHOW,
  }),
  getters: {},
  actions: {
    addVisitedView(view: any) {
      if (this.visitedViews.some((v) => v.name === view.name)) return

      this.visitedViews.push({
        meta: view.meta,
        name: view?.name,
        path: view.path,
      })
    },
    deleteVisitedView(view: any) {
      this.visitedViews = this.visitedViews.filter(
        (tag) => tag.name != view.name
      )
    },
    closeAllLabels() {
      this.visitedViews = this.visitedViews.filter((tag) => tag.meta.affix)
    },
    closeOtherLabels(view: ExpandRouteRecordRaw) {
      this.visitedViews = this.visitedViews.filter(
        (tag) => tag.name === view.name || tag.meta.affix
      )
    },
    updatIsShow(isShow: boolean) {
      this.isShow = commit<boolean>(TAGS_VIEW_IS_SHOW, isShow)
    },
  },
})
