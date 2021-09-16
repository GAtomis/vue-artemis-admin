/*
 * @Description: 状态管理工具
 * @Author: Gavin
 * @Date: 2021-07-20 13:39:08
 * @LastEditTime: 2021-09-02 17:11:53
 * @LastEditors: Gavin
 */
  
import { createStore, useStore as baseUseStore, createLogger, Store } from 'vuex'
// import createPersistedState from 'vuex-persistedstate';
import { App, InjectionKey } from 'vue'
import modules from '@/store/modules'
import { IStore } from './types'
import getters from './getters'


const store = createStore<IStore>({
  modules,
  getters
})

export const key: InjectionKey<Store<IStore>> = Symbol()

// 定义你自己的“useStore”组合函数
export function useStore() {
  return baseUseStore(key)
}
export function setupStore(app: App) {
  app.use(store, key)
  console.log(store, 'vuex')
}

export default store