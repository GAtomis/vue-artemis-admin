/*
 * @Description: 菜单
 * @Author: Gavin
 * @Date: 2022-08-03 11:15:05
 * @LastEditTime: 2022-08-08 23:18:19
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
export function createItem<Q = Permission, R = string>(data: Q) {
  return http.request<R>(
    {
      url: '/permission/permission',
      method: 'POST',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
export function updateItem<Q = Permission, R = string>(data: Q) {
  return http.request<R>(
    {
      url: '/permission/permission',
      method: 'PUT',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}

export function delItem<Q = Permission, R = string>(data: Q) {
  return http.request<R>(
    {
      url: '/permission/permission',
      method: 'DELETE',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}

export function getItem<Q = Primarykey, R = Permission>(params: Q) {
  return http.request<R>(
    {
      url: '/permission/permission',
      method: 'GET',
      params,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
