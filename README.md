<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2023-02-04 13:28:45
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


## [English](./README.md) |  [简体中文](./README.zh-CN.md)
## Introduction
 English is no good - -, The template realized by vue-next + TS + antd Vue + vite2 + vueuse.The significance of the project is to communicate and learn with all leaders
## About

### Preview&Server
Online instance has been deployed
* [Preview](http://43.143.244.182/)
* [Server(gin-artemis-admin)](https://github.com/GAtomis/gin-artemis-admin)

<p >
  <a href="https://www.antdv.com/">
    <img width="300" style="margin-right:15px;" src="https://s2.loli.net/2022/11/14/aPz3UEesWINFtiL.png">
    <img width="300" src="https://s2.loli.net/2022/11/14/g5voDjAchPTCMlr.png">
  </a>
</p>

### Describe
This setup removes the data scheme of mock simulating RBAC in the previous version, and logs in to VAA (Vue Artemis admin) by implementing RBAC authentication through the service
### Language & Application
Through the RBAC service implemented by (golang+gorm+gin), functions such as logging and redis will be added later
### Basic function of template (improvement)
- reconstruct-vuex=>:pineapple:pinia :heavy_check_mark:
- feat-SSO(login) :heavy_check_mark:
- feat-async-route loading :heavy_check_mark:
- feat-Theme light&dark replacement :heavy_check_mark:
- feat-Permission configuration :wrench:
- feat-form-constructor(closed) :wrench:
- feat-auto Router modules :heavy_check_mark:
- expand-threeJs-comp:heavy_check_mark:
- New component Echars:heavy_check_mark:
- Added eslint & perttier review code specification :heavy_check_mark:
- replace tag ico


## Q&A About project
### Q1 feat-auto Router modules, How to sort menus?
 All routing tables will be automatically imported into Vue router. You only need to establish the corresponding configuration file in '@/router/modules/*.ts' to import them automatically
 Sort by the weight value of sortIndex. The default value of item ortIndex without this attribute is 0(max)
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
### Q2 Theme light&dar How to use？
  enter HomePage Move the mouse to the right of the window DOM click Setting


### Q3 Asynchronous routing mode, the third-party library cannot be introduced in the development environment
  This problem is being investigated. At present, the project development will not receive much impact.Submitted to Issues
### Q4 How to replace icons in the menu
  Icons setting through antdv custom icon. [iconfont]('https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.dc64b3430&cid=9402')Collect your favorite charts and customize icon settings.Configure icons by generating links
```
  //path @/components/Iconfont
  export function registerIconComponents(app: App): void {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2732043_9vyrkwrodqw.js',
  })
  app.component('IconFont', IconFont)
}

```

## Fix log
* Hot-reloads no page memory overflow=>Store configuration initialization
* Hot-reload no page&&router no page=>keep-aliv&&router-view add Key
* about :pineapple:pinia 
  Vuex4 support for typescript doesn't really fit.Therefore, the main branch is reconstructed.Vuex 
* fix productionEnvironment light&dark 
* fix Replace faker =>@faker-js/faker
* New component Echars=> load-on-demand 
* The page hidding function is repaired. Now the page setting hiding of routing level will not be displayed in the menu bar
* fix vue-router hot-reload .ctx.deactivate is not a function=>keep alive component add key
* beforeEach has been revised to the official recommended usage
* pending  vite-plugin-imagemin(plugins) install error 
* form-constructor =>due to plug-in to Vue3.2 or vite is not supported, which leads to abnormal conditions in the development environment of the plug-in, so this function is temporarily cancelled and waiting for official repair

* Cancel the mock



## Quick start

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

## Maintainer
[My blog](https://juejin.cn/post/6966454624819609631)  by Gavin
## Other
[awesome-vue3「zh-CN」](./VUE3_README.md)

## Thanks 
I sincerely thank the three developers for their help, although I have never communicated
[@PanJiaChen](https://github.com/PanJiaChen) 花裤衩
[@Anthony Fu](https://github.com/antfu) ant fu
[@coderwhy](https://github.com/coderwhy?tab=repositories) 王红元老师
