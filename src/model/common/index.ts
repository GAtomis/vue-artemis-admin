/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-31 15:52:34
 * @LastEditTime: 2022-08-05 15:18:05
 * @LastEditors: Gavin
 */
//入参数

export type PageInfo = {
  page: number
  pageSize: number
}

export type PageStruct<T> = {
  item: T[]
  total: number
}
export type Primarykey = {
  id: string
}

export type DBModel = {
  id?: string | number
  createdAt?: string
  deletedAt?: string
  updatedAt?: string
}
