/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-07-20 16:30:25
 * @LastEditors: Gavin
 */
import { IAppState } from './state'

export const mutations = {
  setToken: (state: IAppState, token: string) => {
    state.token = token
  },
  setAvatar: (state: IAppState, avatar: string) => {
    state.avatar = avatar
  },
  setRoles: (state: IAppState, roles:any) => {
    state.roles = roles
  },
  setUserInfo: (state: IAppState, info:any) => {
    state.info = info
  }
}
