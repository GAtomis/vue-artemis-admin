/*
 * @Description: axios api
 * @Author: Gavin
 * @Date: 2021-08-04 14:12:56
 * @LastEditTime: 2022-08-10 21:48:06
 * @LastEditors: Gavin
 */
import http from '@/utils/axios'
import type { Comment } from '@/model/dashboard'
import type { Primarykey } from '@/model/common'
// enum Api {
//   login = '/login',
//   logout = '/login/logout',
//   user='/getUserInfo'
// }

/**
 * @description: 获取用户信息
 */
// export function getComments(data: comment) {
//   return http.request(
//     {
//       url: '/dashboard/getComments',
//       method: 'post',
//       data,
//     },
//     {
//       //序列化.data取值
//       isTransformRequestResult: true,
//     }
//   )
// }
/**
 * @description: 获取用户信息
 */
export function getComments<Q = Primarykey, R = Comment[]>(params: Q) {
  return http.request<R>(
    {
      url: '/comment/getComments',
      method: 'GET',
      params,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
/**
 * @description: 获取用户信息
 */
export function getToolList() {
  return http.request(
    {
      url: '/repos/Microsoft/TypeScript',
      method: 'get',
    },
    {
      //序列化.data取值
      isTransformRequestResult: !true,
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
