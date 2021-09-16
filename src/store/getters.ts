/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 16:33:10
 * @LastEditTime: 2021-09-09 19:09:23
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
