/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-06 16:01:08
 * @LastEditTime: 2021-09-03 11:43:18
 * @LastEditors: Gavin
 */
/**
 * 向后端请求用户的菜单，动态生成路由
 */

import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export type { IPermissionState} from './state'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
