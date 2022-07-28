/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2022-07-27 22:41:53
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'
import { ACCESS_TOKEN, CURRENT_USER, CACHE_USERNAME } from '@/store/store-enum'
import { storage } from '@/utils/storage'
import { login, getUserInfo } from '@/api/login'
import { LoginFrom } from '@/model/login/login-form' //深坑一定要用type导出接口 vite专属bug
import type { UserInfo } from '@/model/account'

export type IUserState = UserInfo & {
  username?: string
  token?: string
  age: number
  level?: string
  welcome: string
  roles: any[]
  info?: any
}

export default defineStore({
  id: 'user',
  state: (): IUserState => ({
    id: 0,
    token: storage.get(ACCESS_TOKEN, '') as string,
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    level: '',
    username: storage.get(CACHE_USERNAME, '') as string,
    age: 0,
    jobType: '',
    catchPhrase: '',
    company: '',
  }),
  getters: {
    getInfo: (state) => state,
    getToken: (state) => state.token,
  },
  actions: {
    // ActionContext<S, R> s为state R为rootState
    // // 登录获取token
    // async login({ username, password }): Promise<any> {
    //   try {
    //     const response = await login({ username, password })
    //     const ex = 7 * 24 * 60 * 60 * 1000 //过期时间
    //     storage.set(ACCESS_TOKEN, response.token, ex)
    //     storage.set(CACHE_USERNAME, username, ex)
    //     this.token = response.token
    //     this.username = username
    //     return Promise.resolve(response)
    //   } catch (e) {
    //     return Promise.reject(e)
    //   }
    // },
    // 登录获取token
    async login({ username, password, code }: LoginFrom): Promise<any> {
      try {
        const response = await login({ username, password, code })
        console.warn(response)

        const ex = 7 * 24 * 60 * 60 * 1000 //过期时间
        storage.set(ACCESS_TOKEN, response.token, ex)
        storage.set(CACHE_USERNAME, username, ex)
        this.token = response.token
        this.username = username
        return Promise.resolve(response)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 获取用户信息
    getUserInfo() {
      return new Promise<Array<string>>(async (resolve, reject) => {
        try {
          const { roleId, ...res } = await getUserInfo()
          //信息填充
          //测试不报错
          const roles = ['admin']
          Object.entries({ roles, ...res }).forEach(([key, value]) => {
            this[key] = value
          })
          if (!roles || roles.length <= 0) {
            reject(
              'getInfo: roles must be a non-null array!||登录的路由未获取权限列表'
            )
          }
          resolve(roles)
        } catch (error) {
          reject(error)
        }
      })
    },

    resetToken(): Promise<string> {
      return new Promise((resolve) => {
        this.token = ''
        this.name = ''
        storage.clear()
        resolve(this.token)
      })
    },
  },
})
