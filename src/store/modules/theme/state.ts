/*
 * @Description: state定义
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-11-02 18:05:18
 * @LastEditors: Gavin
 */
// import { createStorage } from '@/utils/Storage'
// import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'
// const Storage = createStorage({ storage: localStorage })


import {RouteRecordRaw } from 'vue-router'
import {THEME_BG_COLOR} from '@/store/store-enum'
import { createStorage } from '@/utils/storage'
const Storage = createStorage({ storage: localStorage })
export type IThemeState = {
  themeBackgroundColor:string,
  themeText:string,
  themeStyle:boolean

}

export const state: IThemeState = {
  themeBackgroundColor:Storage.get(THEME_BG_COLOR, '')||"#55acee",
  themeText:"",
  themeStyle:false
}
