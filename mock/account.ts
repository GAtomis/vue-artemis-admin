/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-10-26 14:16:27
 * @LastEditTime: 2021-11-01 19:08:55
 * @LastEditors: Gavin
 */




import { MockMethod } from 'vite-plugin-mock'
import faker from "@faker-js/faker"

faker.locale = "zh_CN";
const baseUrl = '/api'
const model = '/account'



interface PermissionUser {

  user: string[],
  admin: string[]
}
const permissionUser: PermissionUser = {
  user: ["/account"
    ,"/account/center"
    , "/account/settings"
    , "/readme"
    , "/readme/read"
    , "/readme/me"
    , "/nested"
    , "/nested/menu1"
    , "/nested/menu1/menu1-1"
    , "/nested/menu2"],

  admin: ["/account"
    ,"/account/center"
    , "/account/settings"
    , "/readme"
    , "/readme/read"
    , "/readme/me"
    , "/error"
    , "/error/404"
    , "/error/500"
    , "/nested"
    , "/nested/menu1"
    , "/nested/menu1/menu1-1"
    , "/nested/menu2"]
}


export default [

  {
    url: baseUrl + model + '/getPermissionList',
    method: 'post',
    response: (res) => {

      const { level } = res.body

      return {
        code: 0,
        message: 'ok',
        result: permissionUser[level]
      }

    },

  },
  {
    url: baseUrl + model + '/getAccountLevel',
    method: 'post',
    response: (res) => {

      return {
        code: 0,
        message: 'ok',
        result: []
      }

    }

  },

] as MockMethod[]
