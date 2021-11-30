/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 16:33:10
 * @LastEditTime: 2021-11-26 18:24:48
 * @LastEditors: Gavin
 */

import {IStore} from '@/store/types'

const getters = {
  sidebar: (state:IStore)=> state.app.name,
  userInfo:(state:IStore)=> state.user,
  visitedViews:(state:IStore)=>state.tagsView.visitedViews,
  themeBackgroundColor:(state:IStore)=>state.theme.themeBackgroundColor,
  isNavShow:(state:IStore)=>state.tagsView.isShow,
}
export default getters
