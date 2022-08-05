/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-27 18:48:38
 * @LastEditTime: 2022-08-03 18:26:03
 * @LastEditors: Gavin
 */

//坑早知道用interface了, type的继承真的丑
import { DBModel } from '@/model/common'
export type UserInfo = {
  name: string
  company: string
  catchPhrase: string
  jobType: string
  avatar: string
} & DBModel
//
export type Role = {
  name: string
  available: boolean
  sysPermissions: Permission[] | null
  sysUsers: UserInfo[] | null
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
} & DBModel
