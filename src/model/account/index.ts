/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-27 18:48:38
 * @LastEditTime: 2022-07-31 17:47:37
 * @LastEditors: Gavin
 */

//坑早知道用interface了, type的继承真的丑
export type UserInfo = {
  id?: number
  name: string
  company: string
  catchPhrase: string
  jobType: string
  avatar: string
}
//
export type Role = {
  id?: number
  name: string
  available: string
  sysUsers: UserInfo[] | null
}
