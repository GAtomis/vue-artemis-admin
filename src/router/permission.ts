/*
 * @Description: 路由守卫
 * @Author: Gavin
 * @Date: 2021-07-21 09:53:05
 * @LastEditTime: 2022-02-23 13:53:14
 * @LastEditors: Gavin
 */
import { Router, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
// import store from '@/store'
import { useUser, usePermission } from '@/store/pinia/index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // 进度条样式
import { ACCESS_TOKEN } from '@/store/store-enum'
import { storage } from '@/utils/storage'
import { resetRoute } from '@/hooks/router'
import { message, notification } from 'ant-design-vue';
import { useTitle } from '@vueuse/core'


NProgress.configure({ showSpinner: false }) // NProgress Configuration


//白名单
const whitelist: Array<string> = ['Login', 'Error', '404'] // no redirect whitelist



export function createGuardHook(router: Router): void {


  router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // console.log("Hook开始", to);

    NProgress.start()
    const hasToken: string = storage.get(ACCESS_TOKEN, '')
    //白名单内路由表直接放行 redirect of routes included in the white list
    //是否有路由
    const hasRoute: string | boolean | undefined | null = router.hasRoute(to.name as string)
    // 是否授权useUser,
    const hasRoles: string | boolean | undefined | null = usePermission().roles?.length > 0
    //是否有登录信息
    const hasUserInfo: string | boolean | undefined | null = useUser().name

    if (whitelist.includes(to.name as string)) {
      if (to.path === "/Login") {
        Promise.all([useUser().resetToken(), usePermission().resetRoles()]).then(([res1, res2]: Array<any>) => {
          console.log(res2);
          res2.length && history.go(0)
          next()
        })
      }
      next()


    }
    else if (hasToken) {



      if (hasRoute && hasUserInfo) {
        console.log("有条件放行");


        next()
      } else if (hasUserInfo) { next({ name: '404', query: { redirect: to.fullPath }, replace: true }) } else {
        try {
          const roles = await useUser().getUserInfo()
          const accessedRoutes: Array<RouteRecordRaw> = await usePermission().generateRoutes(roles)
          resetRoute(accessedRoutes)
          next({ ...to, replace: true })
          // next()
          setTimeout(() => {
            notification?.['success']?.({
              message: `Hi! ${hasUserInfo}, welcome in! Wish you a good mood every day ^-^!`,
            })
            console.log('hi! Artemis! I m glad to meet you in my life!Tried, flattered, struggled！In fact，we are in different world，we are only passengers for each other！Dont matter! I love u! Never expire! I m dying to see how this one ends');
          }, 706);

        } catch (error) {
          message.warning('Login credentials are invalid or expired. Please login again!');
          next({ name: 'Login', query: { redirect: to.fullPath }, replace: true })
        }
      }
    } else {
      next({ name: 'Login', query: { redirect: to.fullPath }, replace: true })
      NProgress.done()
    }




  })
  router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const htmlTitle = useTitle()
    htmlTitle.value = to.meta.title as string
    // console.error("导航完成", to);

    NProgress.done()
  })


}
