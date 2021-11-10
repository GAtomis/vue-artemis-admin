/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-07-20 16:36:25
 * @LastEditTime: 2021-11-03 17:16:26
 * @LastEditors: Gavin
 */
//
// /********************************自动导包 start********************************/
const allModules = import.meta.globEager('./*/index.ts')
const modules = {} as any
Object.keys(allModules).forEach((path) => {
  const fileName = path.split('/')[1]
  modules[fileName] = allModules[path][fileName] || allModules[path].default || allModules[path]
})

export {allModules}

console.log(modules, allModules,'vuex自动导包')
// /********************************自动导包 end********************************/
//
export default modules