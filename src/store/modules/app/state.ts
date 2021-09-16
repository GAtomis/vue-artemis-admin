/*
 * @Description: state定义
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-07-20 18:37:57
 * @LastEditors: Gavin
 */
// import { createStorage } from '@/utils/Storage'
// import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'
// const Storage = createStorage({ storage: localStorage })

export type IAppState = {
  token?: string
  name: string
  welcome: string
  avatar: string
  roles: any[]
  info?: any
}

export const state: IAppState = {
  // token: Storage.get(ACCESS_TOKEN, ''),
  name: '',
  welcome: '',
  avatar: '',
  roles: [],
  // info: Storage.get(CURRENT_USER, {})
}
