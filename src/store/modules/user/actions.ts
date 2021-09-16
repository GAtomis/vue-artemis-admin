/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-09-13 19:14:01
 * @LastEditors: Gavin
 */
import { ActionContext } from 'vuex'
import { IUserState as IUserState } from './state'
import { login,getUserInfo } from '@/api/login'

import { ACCESS_TOKEN, CURRENT_USER, IS_LOCKSCREEN ,CACHE_USERNAME} from '@/store/store-enum'
import { storage } from '@/utils/storage'
// import store from '@/store'
import { IStore } from '@/store/types'
import store from '@/store'
import { promiseTimeout } from '@vueuse/core'

export const actions = {

  // ActionContext<S, R> s为state R为rootState
  // 登录获取token
  async login({ commit }: ActionContext<IUserState, IStore>, { username, password }) {
    try {
      const response = await login({ username, password })
      const ex = 7 * 24 * 60 * 60 * 1000//过期时间
      storage.set(ACCESS_TOKEN, response.token, ex)
      storage.set(CACHE_USERNAME, username, ex)
      commit('setUserName',username)
      return Promise.resolve(response)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  // 获取用户信息
  getUserInfo({ commit,state}: ActionContext<IUserState, IStore>,username:any=state.username) {
    return new Promise(async(resolve, reject) => {
         const {roles, ...res}  = await getUserInfo({username})

        //信息填充
        Object.entries(res).forEach(item=>{
          commit('setAny',item)
        })
        if (!roles || roles.length <= 0) {
          reject(
              "getInfo: roles must be a non-null array!||登录的路由未获取权限列表"
          );
        } 
        resolve(roles)

  
    })
  },

  resetToken({ commit,state}: ActionContext<IUserState, IStore>){
    return new Promise(resolve => {
      commit('setToken', '')
      commit('setAny', ['name',''])
      storage.clear()
      resolve(state.token)
    })
  }

  
}

