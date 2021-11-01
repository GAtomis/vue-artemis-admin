/*
 * @Description: state定义
 * @Author: Gavin
 * @Date: 2021-07-20 14:51:12
 * @LastEditTime: 2021-10-26 16:51:21
 * @LastEditors: Gavin
 */
import { createStorage } from '@/utils/storage'
import { ACCESS_TOKEN, CURRENT_USER,CACHE_USERNAME } from '@/store/store-enum'
const Storage = createStorage({ storage: localStorage })

export type IUserState = {
  username?:string
  token?: string
  age:number,
  level?:string,
  jobType:string,
  name: string
  welcome: string
  avatar: string
  roles: any[]
  info?: any
}

export const state: IUserState = {
  token: Storage.get(ACCESS_TOKEN, ''),
  name: '',
  welcome: '',
  avatar: '',
  roles: [],
  level:"",
  username:Storage.get(CACHE_USERNAME, ''),
  age:0,
  jobType:''

  // info: Storage.get(CURRENT_USER, {})
}
