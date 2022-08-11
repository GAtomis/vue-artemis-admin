/*
 * @Description: 归属于目录的特殊函数
 * @Author: Gavin
 * @Date: 2022-08-07 12:14:46
 * @LastEditTime: 2022-08-10 20:23:33
 * @LastEditors: Gavin
 */
import type { Permission } from '@/model/account'

export function recursiveFormatting(list: Array<Permission>, index) {
  const roots: Array<Permission> = []
  const others: Array<Permission> = []

  list.forEach((element) => {
    element.key = element.id
    if (element.parentid == index) {
      roots.push(element)
    } else {
      others.push(element)
    }
  })
  roots.length &&
    roots.forEach((element) => {
      const deep = recursiveFormatting(others, element.url)
      deep.length && (element.children = deep)
    })
  // console.log(roots, others, list, index)

  return roots
}
