/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-30 19:19:38
 * @LastEditTime: 2021-12-31 15:16:35
 * @LastEditors: Gavin
 */

export type IAppState = {
  token?: string
  name: string
  welcome: string
  avatar: string
  roles: any[]
  info?: any
}

import { defineStore } from 'pinia'
export default defineStore({
  id: 'app',
  state: (): IAppState => ({
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
  }),
  getters: {
    sidebar: (state) => state.name,
  },
  actions: {},
})
