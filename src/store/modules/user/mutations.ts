/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-09-06 21:13:51
 * @LastEditors: Gavin
 */
import { IUserState } from './state'

export const mutations = {
  setToken: (state: IUserState, token: string) => {
    state.token = token
  },
  setAvatar: (state: IUserState, avatar: string) => {
    state.avatar = avatar
  },
  setRoles: (state: IUserState, roles:any) => {
    state.roles = roles
  },
  setUserInfo: (state: IUserState, info:any) => {
    state.info = info
  },
  setUserName: (state: IUserState, username:string) => {
    state.username= username
  },
  setAny:(state: IUserState,[key,value]:any) => {
      state[key]=value  
      
  },
  clearAll(){
    
  }
     
     
}
