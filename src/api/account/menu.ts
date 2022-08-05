/*
 * @Description: 菜单
 * @Author: Gavin
 * @Date: 2022-08-03 11:15:05
 * @LastEditTime: 2022-08-05 11:34:36
 * @LastEditors: Gavin
 */
import type { Primarykey } from '@/model/common'
import type { Permission } from '@/model/account'
import http from '@/utils/axios'
export function getListByRoleId<Q = Primarykey, R = Permission[]>() {
  return http.request<R>(
    {
      url: '/permission/getListByRoleId',
      method: 'GET',
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
