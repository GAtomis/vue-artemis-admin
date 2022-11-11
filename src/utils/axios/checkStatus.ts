/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-04 11:36:33
 * @LastEditTime: 2022-11-11 11:01:06
 * @LastEditors: Gavin 850680822@qq.com
 */
import { message as Message } from 'ant-design-vue'
import router from '@/router'
import { createStorage } from '@/utils/storage'

const storage = createStorage()

const error = Message.error!

export function checkStatus(status: number, msg: string): void {
  switch (status) {
    case 400:
      error(`${msg}`)
      break
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401:
      error('用户没有权限（令牌、用户名、密码错误）!')
      // store.dispatch('user/loginOut', {
      //   goLogin: true,
      // });
      break
    case 403:
      error('用户得到授权，但是访问是被禁止的。!')
      break
    // 404请求不存在
    case 404:
      error('网络请求错误,未找到该资源!')
      break
    case 405:
      error('网络请求错误,请求方法未允许!')
      break
    case 408:
      error('网络请求超时!')
      break
    case 500:
      error('Server error 500, please contact the administrator')
      break
    case 501:
      error('网络未实现!')
      break
    case 502:
      error('网络错误!')
      break
    case 503:
      error('服务不可用，服务器暂时过载或维护!')
      break
    case 504:
      error('网络超时!')
      break
    case 505:
      error('http版本不支持该请求!')
      break
    default:
      error(msg || '请检查网络连接')
  }
}
