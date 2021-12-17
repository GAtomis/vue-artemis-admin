/*
 * @Description: state定义
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-12-16 18:33:03
 * @LastEditors: Gavin
 */
// import { createStorage } from '@/utils/Storage'
// import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'
// const Storage = createStorage({ storage: localStorage })


import {RouteRecordRaw } from 'vue-router'
import {THEME_BG_COLOR,THEME_BG_MENU,THEME_SIDE_MODEL} from '@/store/store-enum'
import { createStorage } from '@/utils/storage'
const Storage = createStorage({ storage: localStorage })

export type IThemeState = {
  themeBackgroundColor:string,
  themeText:string,
  themeMenu:string,
  themeStyle:boolean,
  sideModel:string

}

export const state: IThemeState = {
  themeBackgroundColor:Storage.get(THEME_BG_COLOR)||"#55acee",
  themeText:"",
  themeMenu:Storage.get(THEME_BG_MENU)||"#304156",
  themeStyle:false,
  sideModel:Storage.get(THEME_SIDE_MODEL)||"inline",
}
