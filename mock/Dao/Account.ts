/*
 * @Description: 用户
 * @Author: Gavin
 * @Date: 2021-11-01 18:15:53
 * @LastEditTime: 2021-11-01 19:07:00
 * @LastEditors: Gavin
 */

export interface Level {
  level: string
  name: string
  lock?: boolean
  createTime: string
  permission: string[]
}
class AccountLevel implements Level {
  level
  name
  lock
  createTime
  permission
  constructor(
    name: string,
    level: string,
    lock: boolean,
    createTime: string,
    permission: string[]
  ) {
    Object.assign(this, { name, level, lock, createTime, permission })
  }
}
