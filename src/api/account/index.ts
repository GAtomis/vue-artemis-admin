/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-26 18:28:02
 * @LastEditTime: 2022-08-05 18:18:11
 * @LastEditors: Gavin
 */

import http from '@/utils/axios'

type comment = {
  level: string
}
/**
 * @description: 获取用户信息
 */
export function getPermissionList(data: comment) {
  return http.request(
    {
      url: '/account/getPermissionList',
      method: 'post',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}

//user 改
export function updateItem<Q = any, R = any>(data: Q) {
  return http.request<R>(
    {
      url: '/user/user',
      method: 'PUT',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
//user 增
export function createItem(data) {
  return http.request(
    {
      url: '/user/user',
      method: 'POST',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
export function getItemById(params) {
  return http.request(
    {
      url: '/user/user',
      method: 'GET',
      params,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}

// /**
//  * @description: 用户登录
//  */
// export function login(params: LoginParams) {
//   return http.request<BasicResponseModel<LoginResultModel>>(
//     {
//       url: Api.login,
//       method: 'POST',
//       params
//     },
//     {
//       isTransformRequestResult: false
//     }
//   )
// }
