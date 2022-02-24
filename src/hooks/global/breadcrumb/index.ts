/*
 * @Description: 面包削hook
 * @Author: Gavin
 * @Date: 2021-08-25 16:39:13
 * @LastEditTime: 2021-08-25 17:17:24
 * @LastEditors: Gavin
 */

import { RouteLocationNormalizedLoaded } from 'vue-router'
import { ref, watch, Ref } from 'vue'

interface IBreadcrumbList {
  path: string
  title: string | symbol
}

type Obj = {
  data: Ref<Array<IBreadcrumbList>>
}

export function getCurrentRoute(route: RouteLocationNormalizedLoaded): Obj {
  const fn = () => {
    const breadcrumbList: Array<IBreadcrumbList> = []
    const notShowBreadcrumbList = ['Dashboard', 'RedirectPage'] // 不显示面包屑的导航
    if (
      route.matched[0] &&
      notShowBreadcrumbList.includes(route.matched[0].name as string)
    )
      return breadcrumbList
    route.matched.forEach((v) => {
      const obj: IBreadcrumbList = {
        title: v.meta.title as string,
        path: v.path,
      }
      breadcrumbList.push(obj)
    })
    return breadcrumbList
  }
  const data = ref<Array<IBreadcrumbList>>(fn())

  watch(
    () => route.path,
    () => (data.value = fn())
  )
  return { data }
}
