/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-10-25 12:06:38
 * @LastEditors: Gavin
 */
import { ITagsViewState } from './state'

export const mutations = {
  ADD_VISITED_VIEW: (state: ITagsViewState, view) => {

    // console.log(state.visitedViews.some(v => v.name === view.name));

    if (state.visitedViews.some(v => v.name === view.name)) return

    state.visitedViews.push(
      {
        meta: view.meta,
        name: view.name,
        path: view?.fullPath ?? view?.path
      }
    )
  },
  DELETE_VISITED_VIEW: (state: ITagsViewState, view) => {
    state.visitedViews = state.visitedViews.filter(tag => {
      return tag.name != view.name
    })
  },
  CLEAN_VISITED_VIEW: (state: ITagsViewState, view) => {
    state.visitedViews = []
  },
  CLOSE_OTHER_TAGS: (state: ITagsViewState, view) => {


    state.visitedViews = state.visitedViews.filter(tag => {
      return tag.name === view.name
    })
  },
  UPDATE_IS_SHOW: (state: ITagsViewState, isShow:boolean) => {
    state.isShow =isShow
  }

  // UPDATE_VISITED_VIEW: (state: ITagsViewState, view) => {
  //   state.visitedViews.some(v => v.name === view.name)
  // }
}
