/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-10 20:48:08
 * @LastEditTime: 2022-08-10 21:22:58
 * @LastEditors: Gavin
 */

import { DBModel } from '@/model/common'

export type Comment = {
  like: number
  unlike: number
  title: string
  content: string
  userId: string
  creatorName: string
  [key: string]: any
} & DBModel
