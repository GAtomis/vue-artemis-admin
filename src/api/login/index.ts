/*
 * @Description: axios api
 * @Author: Gavin
 * @Date: 2021-08-04 14:12:56
 * @LastEditTime: 2022-11-14 17:19:34
 * @LastEditors: Gavin 850680822@qq.com
 */
import http from '@/utils/axios'
import type { LoginFrom } from '@/model/login/login-form' //深坑一定要用type导出接口 vite专属bug
import type { UserInfo } from '@/model/account' //深坑一定要用type导出接口 vite专属bug
enum Api {
  login = '/login',
  logout = '/login/logout',
  user = '/getUserInfo',
  LOGIN = '/base/login',
  USER_INFO = '/user/getUserInfo',
}

// /**
//  * @description: 获取用户信息
//  */
// export function login(data) {
//   return http.request(
//     {
//       url: Api.login,
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
// export function getUserInfo(data) {
//   return http.request(
//     {
//       url: Api.user,
//       method: 'POST',
//       data,
//     },
//     {
//       isTransformRequestResult: true,
//     }
//   )
// }
/**
 * @description: 获取用户信息
 */
export function getUserInfo(noCache?:string) {
  return http.request<UserInfo>(
    {
      url: Api.USER_INFO,
      method: 'GET',
      params:noCache&&{noCache}
    },
    {
      isTransformRequestResult: true,
    }
  )
}

export function login(data: LoginFrom) {
  return http.request(
    {
      url: Api.LOGIN,
      method: 'post',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
