/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 15:19:45
 * @LastEditTime: 2021-09-03 11:41:14
 * @LastEditors: Gavin
 */


import {IAppState} from '@/store/modules/app'
import {IUserState} from '@/store/modules/user'
import {IPermissionState} from '@/store/modules/permission'
import {ITagsViewState} from '@/store/modules/tagsView'
import {IThemeState } from '@/store/modules/theme'
export interface IStore {
  app:IAppState,
  permission:IPermissionState,
  user:IUserState,
  tagsView:ITagsViewState,
  theme:IThemeState 
}
