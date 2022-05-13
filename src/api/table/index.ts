/*
 * @Description: axios api
 * @Author: Gavin
 * @Date: 2021-08-04 14:12:56
 * @LastEditTime: 2022-05-13 16:06:22
 * @LastEditors: Gavin
 */
import http from '@/utils/axios'
import { Pagination, PersonResult } from './type'

/**
 * @description: 获取用户信息
 */
export function getPerson<T extends Pagination>(data: T) {
  return http.request<PersonResult>(
    {
      url: '/person/getPerson',
      method: 'post',
      data,
    },
    {
      //序列化.data取值
      isTransformRequestResult: true,
    }
  )
}
