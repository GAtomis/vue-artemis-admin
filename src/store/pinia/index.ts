/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-31 13:41:15
 * @LastEditTime: 2022-01-26 13:21:50
 * @LastEditors: Gavin
 */

import { createPinia } from 'pinia'
import useApp from './app'
import usePermission from './permission'
import useTagsView from './tagsView'
import useUser from './user'
import useTheme from './theme'

const usePinia = () => {
  //   Object.keys(allModules).forEach((path) => {
  //     const fileName = path.split('/')[1]
  //     modules[fileName.split('.')[0]] = allModules[path][fileName] || allModules[path].default || allModules[path]
  //     console.log(modules);
  //   })

  return createPinia()
}
export { useApp, usePermission, useTagsView, useUser, useTheme }

export default usePinia()
