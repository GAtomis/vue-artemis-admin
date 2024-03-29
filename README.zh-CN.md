<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2023-02-04 13:27:44
 * @LastEditors: GAtomis
-->



<p align="center">
  <a href="https://www.antdv.com/">
    <img width="400" src="https://corp-wecom-cdn.elcapp.cn/bb_test/material/image/20211214/20637098569990017.png">
  </a>
</p>
<h1 align="center">Welcome to Artemis Admin 👋</h1>
<p align="center">
    <img alt="vue-next" src="https://camo.githubusercontent.com/759be1e9170b0987efd0b0ce496bf67d132d8e549035ccddf3b6ee5194eb146c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652f6e6578742e737667"/>
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"/>
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>

> Artemis Admin英文不太好先写中文了。本项目基于vue3.2+ts+antd-vue+vite2+vueuse 实现的后台管理系统模板,项目意义重在与各位大佬交流学习。觉得好用就给颗星吧,配套后台见详情


## [English](./README.md) |  [简体中文](./README.zh-CN.md)

## 关于项目
### 线上预览和后台服务
  main分支线上服务,需要查看mock版本请移步至mock-dev 分支
* [线上预览](http://3.112.56.234/)
* [后台服务 gin-artemis-admin](https://github.com/GAtomis/gin-artemis-admin)
<p >
  <a href="https://www.antdv.com/">
    <img width="300" style="margin-right:15px;" src="https://s2.loli.net/2022/11/14/aPz3UEesWINFtiL.png">
    <img width="300" src="https://s2.loli.net/2022/11/14/g5voDjAchPTCMlr.png">
  </a>
</p>


### 描述
  此次搭建移除了之前版本中采用mock模拟RBAC的数据方案,通过后端服务实现RBAC鉴权的方式来登陆VAA(vue-artemis-admin)
### 技术栈
golang+gorm+gin实现的RBAC服务,后续会添加日志和redis等功能
### 模板基础功能(完善中)
- 重构:vuex=>:pineapple:pinia  :heavy_check_mark:
- 单点登录功能(jwt)  :heavy_check_mark:
- 动态路由加载   :heavy_check_mark:
- 主题色替换   :heavy_check_mark:
- 个人主页已经权限配置 :wrench:
- 表单构造器(已关闭) :wrench:
- 功能-自动载入路由器模块 :heavy_check_mark:
- 拓展-three-组件化 :heavy_check_mark:
- Echarts组件化 :heavy_check_mark:
- 加入了Eslint&perttiers审查代码规范 :heavy_check_mark:
- 加入了日常开发表格开发样例(本地)
- 替换ico图表
## Q&A 关于项目
### Q1 功能-自动路由器模块，如何排序菜单？
所有路由表将自动导入Vue-router。您只需要在“@/router/modules/*.ts中建立相应的配置文件 *.ts'自动导入它们
按sortIndex的权重值排序。没有此属性的项OrIndex的默认值为0（最大值）
```
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue');
import { RouteRecordRaw } from 'vue-router'

const mixinRouter: Array<RouteRecordRaw> = [{
  path: '/account',
  component: Layout,
  redirect: '/account/settings',
  name: 'Account',
  meta: {
    title: 'Account',
    icon: 'icon-team',
    roles: "/account",
    sortIndex:2
  },
  children: [

    {
      path: 'center',
      name: 'Center',
      component: () => import('@/views/account/center/index.vue'),
      meta: { title: 'Center',icon: 'icon-user',
      roles: "/account/center" }
    },
    {
      path: 'settings',
      name: 'Settings',
      component: () => import('@/views/account/settings/index.vue'),
      meta: { title: 'Settings',icon: 'icon-switchuser',
      roles: "/account/settings" }
    }
  ]
}
]

export default mixinRouter
```
### Q2 夜间模式如何使用
  进入主页将鼠标移到窗口右侧单击设置

### Q3 异步路由模式，开发环境中不能引入第三方库进入预加载
  这个问题正在调查中。目前项目开发不会受到太大影响，已提交至Issuse
### Q4 如何设置菜单上的icon
  本项目通过antdv中给出的自定义icon设置图标,[iconfont]('https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.dc64b3430&cid=9402')通过收集自己喜欢的icon生成链接配置到项目的配置文件中
  
```
  //path @/components/Iconfont
  export function registerIconComponents(app: App): void {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2732043_9vyrkwrodqw.js',
  })
  app.component('IconFont', IconFont)
}
```

## 疑难杂症日记
* 热更新白页内存移除=>store配置初始化
* 热更新还是无法使用内容白页=>keep-alive和router-view 需要加key保证他的唯一性
* 关于:pineapple:pinia Vuex4对typescript的支持实际上并不合适。因此，重构了主要分支。
* 修复 修复了生产环境没法切换夜间模式
* 修复 替换了删库跑路的faker 从faker=>@faker-js/faker
* 将图表功能组件化并且按需加载
* 页面隐藏功能修复,现在路由层级的页面设置隐藏不会显示在菜单栏中
* 修复了vue-router页面前进后退热更新无法更新问题=>通过在keep alive根节点加key值解决
* 修复路由守卫已修改为官方推荐用法
* 暂停由于vite-plugin-imagemin插件出现了安装错误问题暂时停止使用 package列表已删除
* 表单构造器关闭=>由于插件对vue3.2或vite的不支持导致插件在开发环境出现了异常情况,所以暂时先取消了这个功能,等待官方修复
* 取消mock权限角色,接入后台RBAC权限

## 快速启动

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```
## 作者
[My blog](https://juejin.cn/post/6966454624819609631)  by Gavin
## 其他
[很棒的生态-vue3「简体中文」](./VUE3_README.md)
## 鸣谢
由衷感谢三位大佬的开源精神,虽然我们未曾交流过
[@PanJiaChen](https://github.com/PanJiaChen) 花裤衩
[@Anthony Fu](https://github.com/antfu) ant fu
[@coderwhy](https://github.com/coderwhy?tab=repositories) 王红元老师
