/*
 * @Description: 归属于目录的特殊函数
 * @Author: Gavin
 * @Date: 2022-08-07 12:14:46
 * @LastEditTime: 2022-08-07 21:52:35
 * @LastEditors: Gavin
 */
import type { Permission } from '@/model/account'

export type PermissionItem = Permission & {
  children?: PermissionItem[]
  key: number | string
}

export function recursiveFormatting(
  list: Array<PermissionItem | Permission>,
  index
) {
  const roots: Array<PermissionItem | Permission> = []
  const others: Array<PermissionItem | Permission> = []

  list.forEach((element) => {
    element.key! = element.id
    if (element.parentid == index) {
      roots.push(element)
    } else {
      others.push(element)
    }
  })
  roots.length &&
    roots.forEach((element) => {
      element as PermissionItem
      const deep = recursiveFormatting(others, element.url)
      deep.length && (element.children! = deep)
    })
  // console.log(roots, others, list, index)

  return roots
}
