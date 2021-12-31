/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-31 12:23:51
 * @LastEditTime: 2021-12-31 13:37:55
 * @LastEditors: Gavin
 */

import { RouteRecordRaw } from 'vue-router'

export type VisitedViews = {
  meta?: any,
  name: string,
  path: string,

}
export type ITagsViewState = {
  visitedViews: Array<VisitedViews>,
  cachedViews: Array<RouteRecordRaw>,
  isShow: boolean,
  activeColor?: ''
}



import { defineStore } from 'pinia'
export default defineStore({
  id: 'tagsView',
  state: (): ITagsViewState => ({
    visitedViews: [],
    cachedViews: [],
    isShow: true
  }),
  getters: {
  },
  actions: {
    addVisitedView( view) {
      if (this.visitedViews.some(v => v.name === view.name)) return

      this.visitedViews.push(
        {
          meta: view.meta,
          name: view.name,
          path: view?.fullPath ?? view?.path
        }
      )
    },
    deleteVisitedView( view){
        this.visitedViews = this.visitedViews.filter(tag => tag.name != view.name)
    },
    closeAllLabels(){
      this.visitedViews = this.visitedViews.filter(tag => tag.meta.affix)
    },
    closeOtherLabels(view){
      this.visitedViews = this.visitedViews.filter(tag => tag.name === view.name||tag.meta.affix)
    }
  },
})