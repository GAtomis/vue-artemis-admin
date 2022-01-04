/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-31 11:39:17
 * @LastEditTime: 2022-01-04 11:58:48
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'

import { THEME_BG_COLOR, THEME_BG_MENU, THEME_SIDE_MODEL } from '@/store/store-enum'
import { createStorage } from '@/utils/storage'
const Storage = createStorage({ storage: localStorage })

function commit<T>(title: string, val: T):T {

  const ex = 7 * 24 * 60 * 60 * 1000//过期时间
  Storage.set(title, val, ex)
  return val
}




export type IThemeState = {
  themeBackgroundColor: string,
  themeText: string,
  themeMenu: string,
  themeStyle: boolean,
  sideModel: string

}
export default defineStore({
  id: 'theme',
  state: (): IThemeState => ({

    themeBackgroundColor: Storage.get(THEME_BG_COLOR) || "#55acee",
    themeText: "",
    themeMenu: Storage.get(THEME_BG_MENU) || "#304156",
    themeStyle: false,
    sideModel: Storage.get(THEME_SIDE_MODEL) || "inline"
  }),
  getters: {
  },
  actions: {
    resetTheme() {
      this.updateThemeBackgroundColor()
      this.updateThemeMenu()
      this.updateSideModel()

    },
    updateThemeBackgroundColor(val:string="#55acee") {
      this.themeBackgroundColor=commit<string>('UPDATE_THEME_BG_COLOR', val)
    },
    updateThemeMenu(val:string="#304156") {
      this.themeMenu=commit<string>('UPDATE_THEME_BG_MENU', val)
    },
    updateSideModel(val:string="inline") {
      this.sideModel=commit<string>('UPDATE_THEME_SIDE_MODEL', val)
    }
  },
})