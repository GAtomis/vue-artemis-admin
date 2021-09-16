/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-09-10 18:54:11
 * @LastEditors: Gavin
 */
import { IThemeState } from './state'
import {THEME_BG_COLOR} from '@/store/store-enum'
import { createStorage } from '@/utils/storage'
const Storage = createStorage({ storage: localStorage })

export const mutations = {
  UPDATE_THEME_BG_COLOR: (state: IThemeState, color:string) => {
    const ex = 7 * 24 * 60 * 60 * 1000//过期时间
    Storage.set(THEME_BG_COLOR, color, ex)
      state.themeBackgroundColor=color
  },

  // UPDATE_VISITED_VIEW: (state: IThemeState, view) => {
  //   state.visitedViews.some(v => v.name === view.name)
  // }
}
