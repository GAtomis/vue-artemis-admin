/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-08-06 10:00:31
 * @LastEditTime: 2021-12-31 11:27:12
 * @LastEditors: Gavin
 */

import { privateRouteTable as asyncRoutes } from '@/router/index'
import { RouteRecordRaw} from 'vue-router'

import router from '@/router/index'






let routerStrategy = {

    /**
     * @description: 筛选隐藏策略方法
     * @param {any} value
     * @return {*}
     * @Date: 2021-08-08 09:59:57
     */
    hidden (route:any,roles?:any):boolean{

        return !(route?.meta?.hidden)
    },

    /**
     * @description: 方法说明....
     * @param {any} route
     * @param {any} roles
     * @return {*}
     * @Date: 2021-09-01 15:13:03
     */
    roles(route:any,roles:any):boolean{
       
        
       return roles.some(role => route.meta.roles===role)
    },
    affix(route:any){
        console.log("每次图钉路由",route,route?.meta?.affix);
        
        return route?.meta?.affix
    }
    


}




/**
 * @description: 方法说明....
 * @param {Array} roles
 * @param {RouteRecordRaw} route
 * @param {string} key
 * @return {boolean} 
 * @Date: 2021-08-08 09:36:00
 */
function hasPermission(roles: Array<string>, route: RouteRecordRaw | any, key:string="roles"): boolean {
    // meta并且有roles进行判断
    if (route?.meta) {
        // 服务器请求返回获得的规则数组，去做数组遍历判断，每个路由的meta.roles字符串或者数组去做包含判断
        // return roles.some(role => route.meta.roles.includes(role));
        return routerStrategy?.[key](route,roles)??false
    } else {
        // 没有meta的路由直接显示
        return true;
    }
}

/**
* 递归过滤异步路由表
* @param routes asyncRoutes
* @param roles
*/
export function filterAsyncRoutes<T>(routes: Array<RouteRecordRaw>=asyncRoutes, roles: Array<string>,key?:string):T {
    // 关键筛选  第一个参数所有拥有的所有路由权限，第二参数权限路由
    // res是筛选完的路由
    const res: any[] = [];
    // 所有异步路由遍历
    routes.forEach(route => {
        // 解构
        const tmp = { ...route };
        // 当前路由组是否包含roles
        if (hasPermission(roles,tmp,key)) {
            // 是否存在子路由
            if (tmp.children) {
                // 在进行判断;
                tmp.children = filterAsyncRoutes(tmp.children, roles,key);
            }
            // 如果有权限当前路由加入数组
            // console.error(tmp);

            res.push(tmp);
        }
    });

    return res;
}


/**
* 筛选子路由数据
* @param routes asyncRoutes
* @param roles
*/
export function filterChildren(routes: Array<RouteRecordRaw>, roles: Array<string>,key?:string): any {
    // 关键筛选  第一个参数所有拥有的所有路由权限，第二参数权限路由
    // res是筛选完的路由
    let res: any[] = [];
    // 所有异步路由遍历
    routes.forEach(route => {
        // 解构
        const tmp = { ...route };
        let result
        // 当前路由组是否包含roles
        // if (hasPermission(roles,tmp,key)) {
        //     // 是否存在子路由
        //     if (tmp.children) {
        //         // 在进行判断;
        //         tmp.children = filterAsyncRoutes(tmp.children, roles,key);
        //     }
        //     // 如果有权限当前路由加入数组
        //     console.error(tmp);

        //     res.push(tmp);
        // }
        if(tmp.children){
                 result=filterChildren(tmp.children, roles,key)
                 res=[...res,...result]
                
        }else{
            if(hasPermission(roles,tmp,key)){
                res.push(tmp)
            }
        }
        
    });

    return res;
}

export function resetRoute(list:Array<RouteRecordRaw>):void{ 
    list.forEach(item=>{
        router.addRoute(item.name as string,item)
    })
}

