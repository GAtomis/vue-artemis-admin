/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2021-12-29 18:53:20
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'
import { ACCESS_TOKEN, CURRENT_USER, CACHE_USERNAME } from '@/store/store-enum'
import { storage } from '@/utils/storage'
import { login, getUserInfo } from '@/api/login'
export type IUserState = {
  username?: string
  token?: string
  age: number,
  level?: string,
  jobType: string,
  name: string
  welcome: string
  avatar: string
  roles: any[]
  info?: any
  catchPhrase: string
}

export default defineStore({
  id: "user",
  state: (): IUserState => ({
    token: storage.get(ACCESS_TOKEN, ''),
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    level: "",
    username: storage.get(CACHE_USERNAME, ''),
    age: 0,
    jobType: '',
    catchPhrase: ''
  }),
  getters: {
    userInfo():IUserState{

      return this.state
    },
    token:(state:IStore)=>state.user.token,
  },
  actions: {
    // ActionContext<S, R> s为state R为rootState
    // 登录获取token
    async login({ username, password }):Promise<any>  {
      try {
        const response = await login({ username, password })
        const ex = 7 * 24 * 60 * 60 * 1000//过期时间
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
    getUserInfo(username: string): Promise<unknown> {
      return new Promise(async (resolve, reject) => {
        const { roles, ...res } = await getUserInfo({ username: this.username })

        //信息填充
        Object.entries({ roles, ...res }).forEach(([key, value]) => {
          this[key] = value
        })
        if (!roles || roles.length <= 0) {
          reject(
            "getInfo: roles must be a non-null array!||登录的路由未获取权限列表"
          );
        }
        resolve(roles)


      })
    },

    resetToken(): Promise<unknown> {
      return new Promise(resolve => {
        this.token = ''
        this.name = ''
        storage.clear()
        resolve(this.token)
      })
    }
  }

})