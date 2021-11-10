/*
 * @Description: axios api
 * @Author: Gavin
 * @Date: 2021-08-04 14:12:56
 * @LastEditTime: 2021-10-19 14:03:12
 * @LastEditors: Gavin
 */
import http from '@/utils/axios'

enum Api {
  login = '/login',
  logout = '/login/logout',
  user='/getUserInfo'
}

type comment ={
  username:String
}
/**
 * @description: 获取用户信息
 */
 export function getComments(data:comment) {
  return http.request(
    {
      url: '/dashboard/getComments',
      method: 'post',
      data
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