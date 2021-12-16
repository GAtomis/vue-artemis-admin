/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-12-16 14:33:36
 * @LastEditors: Gavin
 */
import { ActionContext } from 'vuex'
import { IThemeState } from './state'

// import { ACCESS_TOKEN, CURRENT_USER, IS_LOCKSCREEN } from '@/store/mutation-types'
// import { storage } from '@/utils/Storage'
// import store from '@/store'
import { IStore } from '@/store/types'

export const actions = {

  // ActionContext<S, R> s为state R为rootState
  // 登录
  // async login({ commit }: ActionContext<IAppState , IStore>, userInfo) {

  // },

  // addVisitedView({ commit }: ActionContext<IThemeState, IStore>, view) {

  // },

  resetTheme({commit}: ActionContext<IThemeState  , IStore>){
    commit('UPDATE_THEME_BG_COLOR',"#55acee")
    commit('UPDATE_THEME_BG_MENU',"#304156")
      
  }


}

