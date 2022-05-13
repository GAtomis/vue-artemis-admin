/*
 * @Description: 请求结果表单验证
 * @Author: Gavin
 * @Date: 2022-05-13 11:21:57
 * @LastEditTime: 2022-05-13 16:06:02
 * @LastEditors: Gavin
 */
export interface Pagination {
  current: number | string
  pageSize: number | string
  total?: number | string
}

export interface PersonResult {
  total: number
  item: Person[]
  current: number | string
  pageSize: number | string
}
export interface Person {
  country: string
  name: string
  createdTime: Date | number | string
  phone: string
  gender: string
  jobType: string
  avatar: string
  id: number | string
}
