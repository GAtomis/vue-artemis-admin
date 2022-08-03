/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-07-31 15:49:35
 * @LastEditTime: 2022-08-01 22:11:03
 * @LastEditors: Gavin
 */

import type { PageInfo, PageStruct } from '@/model/common'
import type { Role } from '@/model/account'
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
