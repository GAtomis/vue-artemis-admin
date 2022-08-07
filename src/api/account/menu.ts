/*
 * @Description: 菜单
 * @Author: Gavin
 * @Date: 2022-08-03 11:15:05
 * @LastEditTime: 2022-08-07 11:53:20
 * @LastEditors: Gavin
 */
import type { Primarykey, PageInfo, PageStruct } from '@/model/common'
import type { Permission } from '@/model/account'
import http from '@/utils/axios'
export function getListByRoleId<R = Permission[]>() {
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

export function getList<Q = PageInfo, R = PageStruct<Permission>>(params: Q) {
  return http.request<R>(
    {
      url: '/permission/list',
      method: 'GET',
      params,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
