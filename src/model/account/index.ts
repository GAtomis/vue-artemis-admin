/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-27 18:48:38
 * @LastEditTime: 2022-11-11 00:12:02
 * @LastEditors: Gavin 850680822@qq.com
 */

//坑早知道用interface了, type的继承真的丑
import { DBModel } from '@/model/common'
export type UserInfo = {
  name: string
  company: string
  catchPhrase: string
  jobType: string
  avatar: string
  [key: string]: any
} & DBModel
//
export type Role = {
  name: string
  available: boolean
  sysPermissions: Permission[] | null
  sysUsers: UserInfo[] | null
  [key: string]: any
  level?:number
  describe?:string
} & DBModel
export type Permission = {
  name?: string
  type: 'menu' | 'link'
  url: string
  percode?: string
  parentid: string
  parentids?: string
  sortstring?: string
  available?: boolean
  sysRoles?: Role[] | null
  [key: string]: any
} & DBModel
