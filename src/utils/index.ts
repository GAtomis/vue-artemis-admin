/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-05 18:53:05
 * @LastEditTime: 2022-08-10 11:36:08
 * @LastEditors: Gavin
 */

import dayjs from 'dayjs'
// import utc from 'dayjs/plugin/utc'
export const codeUrl = import.meta.env.VITE_BASE_API + 'base/code'

export function getDateByUTC(target: string) {
  // dayjs.extend(utc)

  return dayjs(target).format('YYYY/MM/DD HH:mm:ss')
}

export const defaultFieldList: Array<string> = [
  'createdAt',
  'deletedAt',
  'updatedAt',
]
