/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-26 18:28:02
 * @LastEditTime: 2021-10-26 18:54:19
 * @LastEditors: Gavin
 */

import http from '@/utils/axios'



type comment ={
  level:String
}
/**
 * @description: 获取用户信息
 */
 export function getPermissionList(data:comment) {
  return http.request(
    {
      url: '/account/getPermissionList',
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
