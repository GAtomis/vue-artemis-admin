/*
 * @Description: axios api
 * @Author: Gavin
 * @Date: 2021-08-04 14:12:56
 * @LastEditTime: 2022-01-06 16:06:40
 * @LastEditors: Gavin
 */
import http from '@/utils/axios'

// enum Api {
//   login = '/login',
//   logout = '/login/logout',
//   user='/getUserInfo'
// }

type comment = {
  username: string
}
/**
 * @description: 获取用户信息
 */
export function getComments(data: comment) {
  return http.request(
    {
      url: '/dashboard/getComments',
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
