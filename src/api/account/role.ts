/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-31 15:49:35
 * @LastEditTime: 2022-11-11 12:33:27
 * @LastEditors: Gavin 850680822@qq.com
 */

import type { PageInfo, PageStruct } from '@/model/common'
import type { Role } from '@/model/account'
import type { Primarykey } from '@/model/common'
import http from '@/utils/axios'
export function getList<Q = PageInfo, R = PageStruct<Role>>(params: Q) {
  return http.request<R>(
    {
      url: '/role/list',
      method: 'GET',
      params,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
export function updateItem<Q = Role, R = string>(data: Q) {
  return http.request<R>(
    {
      url: '/role/role',
      method: 'PUT',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
export function getItem<Q = Primarykey, R = Role>(params: Q) {
  return http.request<R>(
    {
      url: '/role/role',
      method: 'GET',
      params,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
export function creatItem<Q = Role, R = string>(data: Q) {
  return http.request<R>(
    {
      url: '/role/role',
      method: 'POST',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}


export function updateRoleOfPermission<Q = Role, R = string>(data: Q) {
  return http.request<R>(
    {
      url: '/role/updateRoleOfPermission',
      method: 'PUT',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}