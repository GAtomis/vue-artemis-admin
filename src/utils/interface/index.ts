/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-19 16:38:57
 * @LastEditTime: 2021-10-19 16:56:15
 * @LastEditors: Gavin
 */
export interface UserInfo {
  name?: string
  age: number | string
  jobType?: string
  tags?: Array<string>
  avatar?: string
  gender?: string
  token?: string
  roles?: Array<string>
  content?: string
  unlike?: number
  like?: number
  action?: number
  action1?: number
  setName?(name: string | number)
}
