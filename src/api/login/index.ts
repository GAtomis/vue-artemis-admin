/*
 * @Description: axios api
 * @Author: Gavin
 * @Date: 2021-08-04 14:12:56
 * @LastEditTime: 2021-09-07 16:37:30
 * @LastEditors: Gavin
 */
import http from '@/utils/axios'

enum Api {
  login = '/login',
  logout = '/login/logout',
  user = '/getUserInfo',
}

/**
 * @description: 获取用户信息
 */
export function login(data) {
  return http.request(
    {
      url: Api.login,
      method: 'post',
      data,
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
export function getUserInfo(data) {
  return http.request(
    {
      url: Api.user,
      method: 'POST',
      data,
    },
    {
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
