/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-09-03 17:00:29
 * @LastEditors: Gavin
 */
import { ActionContext } from 'vuex'
import { ITagsViewState } from './state'

// import { ACCESS_TOKEN, CURRENT_USER, IS_LOCKSCREEN } from '@/store/mutation-types'
// import { storage } from '@/utils/Storage'
// import store from '@/store'
import { IStore } from '@/store/types'

export const actions = {

  // ActionContext<S, R> s为state R为rootState
  // 登录
  // async login({ commit }: ActionContext<IAppState , IStore>, userInfo) {

  // },

  addVisitedView({ commit }: ActionContext<ITagsViewState, IStore>, view) {
    console.log("action",view);
    commit('ADD_VISITED_VIEW', view)
  },
  updateVisitedView({ commit }: ActionContext<ITagsViewState, IStore>, view) {
    commit('UPDATE_VISITED_VIEW',view)
  },
  deleteVisitedView({ commit }: ActionContext<ITagsViewState, IStore>, view){
      commit("DELETE_VISITED_VIEW",view)
  },
  closeAllLabels({ commit }: ActionContext<ITagsViewState, IStore>, view){
    commit('CLEAN_VISITED_VIEW',view)
  },
  closeOtherLabels({ commit }: ActionContext<ITagsViewState, IStore>, view){
    commit('CLOSE_OTHER_TAGS',view)
  }
}

