/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-24 14:34:43
 * @LastEditTime: 2022-01-24 19:01:26
 * @LastEditors: Gavin
 */

const allModules = import.meta.globEager('./*.ts')
import { useBubblingSort } from "@/hooks/global/common"
const modules = {} as any
import {RouterItem} from '@/hooks/router/type/type-router'
let modulesList = [] as Array<RouterItem >
Object.keys(allModules).forEach((path) => {
  const fileName = path.split('/')[1]
  modules[`${allModules[path].default?.meta?.point ?? 0}${fileName.split('.')[0]}`] = allModules[path][fileName] || allModules[path].default || allModules[path]
  modulesList = [...modulesList, ...allModules[path].default as Array<RouterItem >]
  console.error(modules);
})



export default useBubblingSort<RouterItem>(modulesList , (arr, j) => {

  if (arr[j].meta?.sortIndex??0>arr[j+1].meta?.sortIndex??0) {
    console.error(arr[j].meta.sortIndex);  
    var temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }

})