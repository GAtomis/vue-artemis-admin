/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-31 11:39:17
 * @LastEditTime: 2022-01-05 17:26:59
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'
import {
  THEME_BG_COLOR,
  THEME_BG_MENU,
  THEME_SIDE_MODEL,
  THEME_STYLE,
} from '@/store/store-enum'
import {
  SETTINGS_TABVIEW,
  SETTINGS_MENU,
  SETTINGS_ASIDE_MODEL,
  SETTINGS_THEME_STYLE,
} from '@/settings'
import { createStorage } from '@/utils/storage'
const Storage = createStorage({ storage: localStorage })

function commit<T>(title: string, val: T): T {
  const ex = 7 * 24 * 60 * 60 * 1000 //过期时间
  Storage.set(title, val, ex)
  return val
}

export type IThemeState = {
  themeBackgroundColor: string
  themeText: string
  themeMenu: string
  themeStyle: boolean
  sideModel: string
}
export default defineStore({
  id: 'theme',
  state: (): IThemeState => ({
    themeBackgroundColor:
      Storage.get(THEME_BG_COLOR) ||
      commit<string>(THEME_BG_COLOR, SETTINGS_TABVIEW),
    themeText: '',
    themeMenu:
      Storage.get(THEME_BG_MENU) ||
      commit<string>(THEME_BG_MENU, SETTINGS_MENU),
    themeStyle:
      Storage.get(THEME_STYLE) ||
      commit<boolean>(THEME_STYLE, SETTINGS_THEME_STYLE),
    sideModel:
      Storage.get(THEME_SIDE_MODEL) ||
      commit<string>(THEME_SIDE_MODEL, SETTINGS_ASIDE_MODEL),
  }),
  getters: {},
  actions: {
    resetTheme() {
      this.updateThemeBackgroundColor()
      this.updateThemeMenu()
      this.updateSideModel()
      this.updateThemeStyle()
    },
    updateThemeBackgroundColor(val: string = SETTINGS_TABVIEW) {
      this.themeBackgroundColor = commit<string>(THEME_BG_COLOR, val)
    },
    updateThemeMenu(val: string = SETTINGS_MENU) {
      this.themeMenu = commit<string>(THEME_BG_MENU, val)
    },
    updateSideModel(val: string = SETTINGS_ASIDE_MODEL) {
      this.sideModel = commit<string>(THEME_SIDE_MODEL, val)
    },
    updateThemeStyle(val: boolean = SETTINGS_THEME_STYLE) {
      this.themeStyle = commit<boolean>(THEME_STYLE, val)
    },
  },
})
