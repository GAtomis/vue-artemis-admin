/*
 * @Description: app核心
 * @Author: Gavin
 * @Date: 2021-07-20 14:39:18
 * @LastEditTime: 2021-07-20 16:11:06
 * @LastEditors: Gavin
 */
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
export type { IAppState } from './state'//导出status

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}


