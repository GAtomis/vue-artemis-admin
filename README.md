<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2022-02-21 17:05:03
 * @LastEditors: Gavin
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


## [English](./README.md) |  [简体中文](./README-zh_CN.md)
## Introduction
 English is no good - -, The template realized by vue-next + TS + antd Vue + vite2 + vueuse.The significance of the project is to communicate and learn with all leaders
## Basic function of template (improvement)
- reconstruct-vuex=>:pineapple:pinia :heavy_check_mark:
- feat-SSO(login) :heavy_check_mark:
- feat-async-route loading :heavy_check_mark:
- feat-Theme light&dark replacement :heavy_check_mark:
- feat-Permission configuration :wrench:
- feat-Form constructor :wrench:
- feat-auto Router modules :heavy_check_mark:
- expand-threeJs-comp:heavy_check_mark:
- New component Echars:heavy_check_mark:


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




## Fix log
* Hot-reloads no page memory overflow=>Store configuration initialization
* Hot-reload no page&&router no page=>keep-aliv&&router-view add Key
* about :pineapple:pinia 
  Vuex4 support for typescript doesn't really fit.Therefore, the main branch is reconstructed.Vuex 
* fix productionEnvironment light&dark 
* fix Replace faker =>@faker-js/faker
* New component Echars=> load-on-demand 



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

## Thanks 
I sincerely thank the three developers for their help, although I have never communicated
[@PanJiaChen](https://github.com/PanJiaChen) 花裤衩
[@Anthony Fu](https://github.com/antfu) ant fu
[@coderwhy](https://github.com/coderwhy?tab=repositories) 王红元老师
