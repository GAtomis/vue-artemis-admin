/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 16:33:10
 * @LastEditTime: 2021-11-19 15:59:46
 * @LastEditors: Gavin
 */



const getters = {
  sidebar: (state:any)=> state.app.name,
  userInfo:(state:any)=> state.user,
  visitedViews:(state:any)=>state.tagsView.visitedViews,
  themeBackgroundColor:(state:any)=>state.theme.themeBackgroundColor,
  isNavShow:(state:any)=>state.tagsView.isShow,
}
export default getters
