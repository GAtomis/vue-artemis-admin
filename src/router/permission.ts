/*
 * @Description: 路由守卫
 * @Author: Gavin
 * @Date: 2021-07-21 09:53:05
 * @LastEditTime: 2021-09-10 10:16:20
 * @LastEditors: Gavin
 */
import { isNavigationFailure, Router, RouteRecordRaw,RouteLocationNormalized,NavigationGuardNext} from 'vue-router'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // 进度条样式
import { ACCESS_TOKEN } from '@/store/store-enum'
import { storage } from '@/utils/storage'
import { resetRoute } from '@/hooks/router'
import { message,notification } from 'ant-design-vue';
import {useTitle} from '@vueuse/core'


NProgress.configure({ showSpinner: false }) // NProgress Configuration


//白名单
const whitelist: Array<string> = ['Login', 'Error', '404'] // no redirect whitelist


export function createGuardHook(router: Router):void {


  router.beforeEach(async (to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) => {
    // console.log("Hook开始", to);

    NProgress.start()
    const hasToken:string = storage.get(ACCESS_TOKEN, '')
    //白名单内路由表直接放行 redirect of routes included in the white list

    if (whitelist.includes(to.name as string)) {
      if (to.path === "/Login") {
        Promise.all([store.dispatch('user/resetToken'), store.dispatch('permission/resetRoles')]).then(([res1,res2])=> {
          console.log(res2);
          res2.length&&history.go(0)         
          next()
        })
      }
      next()


    }
    else if (hasToken) {
      console.log('hasToken', hasToken);
      //是否有路由
      const hasRoute:string|boolean|undefined|null = router.hasRoute(to.name as string)
      // 是否授权
      const hasRoles:string|boolean|undefined|null = store.getters?.["permission/roles"]?.length > 0
      //是否有登录信息
      const hasUserInfo:string|boolean|undefined|null = store?.getters?.userInfo?.name
      if (hasRoute && hasUserInfo) {
        next()
      } else if (hasUserInfo) { next({ name: '404', query: { redirect: to.fullPath }, replace: true }) } else {
        try {
          const roles:Array<RouteRecordRaw> = await store.dispatch('user/getUserInfo')
          const accessedRoutes: Array<RouteRecordRaw> = await store.dispatch('permission/generateRoutes', roles)         
          resetRoute(accessedRoutes)
          next({ ...to, replace: true })
          notification?.['success']?.({
            message: `Hi! ${store.getters.userInfo.name}, welcome in! Wish you a good mood every day ^-^!`,         
          })    
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
  router.afterEach((to:RouteLocationNormalized, from:RouteLocationNormalized) => {
    const htmlTitle= useTitle()
    htmlTitle.value=to.meta.title as string
    NProgress.done()
  })


}
